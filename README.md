# Kakeibo Budgeting Tool

This project is to go through the entire SLDC for a tool I would find useful. My goal is to go through design, development, deployment, and back again.
Kakeibo Budget is mostly a personal passion project, with specific features in mind.

## What's Inside?

### Apps and Packages
- `web`: NextJS Web application (Front-end using App router and SSR)
- `api`: ExpressJS RESTful API
- `mobile`: ReactNative mobile app
- `types`: Shared types library
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd kakeibo-turbo
pnpm dev
```

## Useful Turborepo Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
