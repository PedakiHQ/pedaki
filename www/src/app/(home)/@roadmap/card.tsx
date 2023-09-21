import { hexToRgb, isDark } from '@pedaki/common/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@pedaki/design/ui/avatar';
import { Badge } from '@pedaki/design/ui/badge';
import { Card, CardContent, CardFooter } from '@pedaki/design/ui/card';
import { Skeleton } from '@pedaki/design/ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '@pedaki/design/ui/tooltip';
import { cn } from '@pedaki/design/utils';
import type { Issue, IssueState, IssueStateReason } from '~/services/github/roadmap';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

type Status = 'OPEN' | 'CLOSED_COMPLETED' | 'CLOSED_NOT_PLANNED';
const StatusMap = {
  OPEN: 'rgb(31, 136, 61)',
  CLOSED_COMPLETED: 'rgb(130, 80, 223)',
  CLOSED_NOT_PLANNED: 'rgb(110, 119, 129)',
} as Record<Status, string>;

// TODO: move theses icons to @pedaki/common/ui/icons
const StatusIcon = {
  OPEN: (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2Z"
      />
    </svg>
  ),
  CLOSED_NOT_PLANNED: (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 5L7 19"
      />
    </svg>
  ),
  CLOSED_COMPLETED: (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
      />
    </svg>
  ),
} as Record<Status, JSX.Element>;

const getStatusKey = (status: IssueState, stateReason: IssueStateReason): Status => {
  return status === 'OPEN' ? 'OPEN' : (`CLOSED_${stateReason!}` as Status);
};

const StatusCircle = ({
  status,
  stateReason,
}: {
  status: IssueState;
  stateReason: IssueStateReason;
}) => {
  // I could use svg, but I'm lazy, css is fine for now
  const statusKey = getStatusKey(status, stateReason);
  const color = StatusMap[statusKey];
  const icon = StatusIcon[statusKey];

  return (
    <div
      className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border"
      style={{ borderColor: `${color}`, color: `${color}` }}
      aria-label={`Issue status: ${statusKey}`}
      role="img"
    >
      {icon}
    </div>
  );
};

export const GithubCard = ({ issue }: { issue: Issue }) => {
  return (
    <Link href={issue.url} prefetch={false} target="_blank" className="w-full">
      <Card className="cursor-pointer bg-white focus-within:border-orange hover:border-orange">
        <CardContent className="space-y-2 pb-3 pt-6">
          <div className="flex flex-row items-center gap-1 space-y-0 text-sm text-secondary">
            <Tooltip>
              <TooltipTrigger>
                <span className="underline">{issue.repository.resourcePath}</span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <span dangerouslySetInnerHTML={{ __html: issue.repository.descriptionHTML }}></span>
              </TooltipContent>
            </Tooltip>
            <span>on {dayjs(issue.createdAt).format('MMM DD')}</span>
          </div>
          <div className="flex flex-row items-baseline gap-2">
            <StatusCircle status={issue.state} stateReason={issue.stateReason} />
            <div>
              <span
                dangerouslySetInnerHTML={{ __html: issue.titleHTML }}
                className="font-semibold"
              ></span>
              <span className="ml-1 text-sm text-secondary">#{issue.number}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            {issue.labels.nodes.map(label => {
              const hex = `#${label.color}`;
              const rgb = hexToRgb(hex);
              const dark = rgb ? isDark(rgb) : false;

              const badgeComponent = (
                <Badge
                  variant="outline"
                  className={cn('border-transparent', { 'text-white': dark })}
                  style={{ backgroundColor: hex }}
                  key={label.name}
                >
                  {label.name}
                </Badge>
              );

              if (!label.description) {
                return badgeComponent;
              }

              return (
                <Tooltip key={label.name}>
                  <TooltipTrigger className="text-secondary">{badgeComponent}</TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <span>{label.description}</span>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="border-t py-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-[20px] w-[20px]">
              <AvatarImage
                src={issue.author.avatarUrl}
                className="my-auto"
                height={20}
                width={20}
                alt={`Avatar of ${issue.author.name}, the author of the issue`}
              />
              <AvatarFallback>
                <Skeleton />
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-secondary">Ouvert par {issue.author.name}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
