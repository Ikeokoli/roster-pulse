# Roster Pulse

Roster Pulse is a focused operations dashboard for reviewing shift coverage, staffing risk, and handoff notes across a busy distribution hub.

## Requirements

- Node.js 20.19.5
- pnpm 10.34.5

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Quality checks

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

All app data is local and deterministic. No credentials or external services are required.

