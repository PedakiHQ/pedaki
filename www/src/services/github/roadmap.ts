import { cache } from '@pedaki/common/cache';
import { env } from '~/env.mjs';
import sanitizeHtml from 'sanitize-html';

export type IssueType = 'ISSUE' | 'PULL_REQUEST';
export type IssueState = 'OPEN' | 'CLOSED';
export type IssueStateReason = null | 'COMPLETED' | 'NOT_PLANNED';

export interface Issue {
  number: number;
  state: IssueState;
  stateReason: IssueStateReason;
  titleHTML: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  labels: {
    nodes: Label[];
  };
  repository: {
    resourcePath: string;
    descriptionHTML: string;
  };
  author: {
    name: string;
    avatarUrl: string;
  };
}

export interface Label {
  name: string;
  color: string;
  description: string;
}

interface JsonResponse {
  data: {
    repository: {
      issues: {
        nodes: (Issue & {
          author: {
            login: string;
          };
        })[];
      };
    };
  };
  errors: {
    message: string;
  }[];
}

const accessToken = env.GITHUB_ROADMAP_ACCESS_TOKEN;
const apiUrl = 'https://api.github.com/graphql';

const query = (owner: string, name: string) => `
query Roadmap {
    repository(owner: "${owner}", name: "${name}") {
        issues(first: 100) {
            nodes {
                state
                titleHTML
                url
                number
                createdAt
                updatedAt
                labels(first: 5) {
                    nodes {
                        name
                        color
                        description
                    }
                }
                repository {
                    resourcePath
                    descriptionHTML
                }
                author {
                    avatarUrl(size: 16)
                    ... on User {
                        name
                    }
                    ... on Bot {
                        login
                    }
                }
                stateReason
            }
        }
    }
}
`;

const repositories = [
  {
    owner: 'pedakihq',
    name: 'pedaki',
  },
  {
    owner: 'vahor',
    name: 'pedaki-pedaki.fr',
  },
];

const ignoredLabels = ['duplicate', 'wontfix', 'unconfirmed'];
const ignoredTitles = ['[WIP]'];
const ignoredUsers = ['renovate'];

const fetchIssues = async (owner: string, name: string): Promise<Issue[]> => {
  console.log(`Fetching issues for ${owner}/${name}`);
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
    body: JSON.stringify({ query: query(owner, name) }),
    next: {
      revalidate: 300, // 5 minutes in seconds
    },
  });

  const { data, errors } = (await response.json()) as JsonResponse;

  console.log({
    data: JSON.stringify(data),
    errors: JSON.stringify(errors),
  });

  // log headers
  console.log(`Headers for ${owner}/${name}:`, {
    'X-RateLimit-Limit': response.headers.get('X-RateLimit-Limit'),
    'X-RateLimit-Remaining': response.headers.get('X-RateLimit-Remaining'),
    'X-RateLimit-Reset': response.headers.get('X-RateLimit-Reset'),
    'X-RateLimit-Used': response.headers.get('X-RateLimit-Used'),
    'X-RateLimit-Resource': response.headers.get('X-RateLimit-Resource'),
  });

  if (errors || !data) {
    console.error(errors);
    throw new Error(`Error fetching roadmap issues for ${owner}/${name}`);
  }

  // Filter nodes that are too recent (less than 1h)
  // to make sure that the ci was applied
  // And ignored users, labels and titles
  data.repository.issues.nodes = data.repository.issues.nodes.filter(issue => {
    if (ignoredUsers.includes(issue.author.name) || ignoredUsers.includes(issue.author.login)) {
      return false;
    }

    if (ignoredLabels.some(label => issue.labels.nodes.some(node => node.name === label))) {
      return false;
    }

    if (ignoredTitles.some(title => issue.titleHTML.includes(title))) {
      return false;
    }

    const createdAt = new Date(issue.createdAt);
    const now = new Date();
    const diff = now.getTime() - createdAt.getTime();
    const diffInHours = diff / (1000 * 3600);

    return diffInHours > 1;
  });

  data.repository.issues.nodes.sort((a, b) => {
    return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
  });
  // 3 columns so 9 issues max
  data.repository.issues.nodes.splice(9);

  data.repository.issues.nodes.forEach(issue => {
    // Sanitize HTML, we are never too safe
    issue.titleHTML = sanitizeHtml(issue.titleHTML);
    issue.repository.descriptionHTML = sanitizeHtml(issue.repository.descriptionHTML);

    // Remove starting / from resourcePath
    issue.repository.resourcePath = issue.repository.resourcePath.replace(/^\//, '');

    // map login to name for bots
    if (issue.author.login) {
      issue.author.name = issue.author.login;
    }
  });

  return data.repository.issues.nodes;
};

export const getRoadmapIssues = async (): Promise<Issue[]> => {
  return await cache(
    async () => {
      console.log('Fetching roadmap issues');

      const issues = await Promise.all(
        repositories.map(repository => fetchIssues(repository.owner, repository.name)),
      );

      const flatIssues = issues.flat();

      // shuffle and keep only 9 issues
      flatIssues.sort(() => Math.random() - 0.5);
      flatIssues.splice(9);

      return flatIssues;
    },
    'roadmap:issues',
    {
      ttl: 1000 * 60 * 10, // 10 minutes
      keepStale: true,
    },
  );
};
