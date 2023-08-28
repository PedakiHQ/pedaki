# Contribution Guidelines

## Table of Contents

- [Development workflow](#development-workflow)
  - [Install dependencies](#install-dependencies)
- [How to contribute](#how-to-contribute)

## Development workflow

We use [pnpm](https://pnpm.js.org/) as our package manager. 

### Install dependencies

```bash
git clone git@github.com:pedakihq/pedaki.git
cd pedaki
pnpm install
```

## How to contribute

### Prerequisites

Before you submit your pull request, start by [opening an issue](https://github.com/PedakiHQ/pedaki/issues/new/choose) describing the problem you want to solve or the feature you want to add.\
This will allow us to discuss this change and make sure it's not already being worked on.

### When you are done

Check that your code passes the tests and linting:

```bash
pnpm check
```

If your change should appear in the changelog:

```bash
pnpm changeset
```

and follow the instructions. Then, commit the changeset:

```bash
git add .changeset/*.md && git commit -m "chore: add changeset"
```

Finally, push your changes and open a pull request.


