## rithikreddy1912

Full‑stack monorepo starter built with Turborepo, designed for a modern TypeScript stack (Next.js + NestJS, Prisma/Postgres, Redis/BullMQ) and ready to grow into AWS with Docker/Kubernetes and Terraform.

### Tech stack

- **Language**: TypeScript  
- **Frontend**: React + Next.js (App Router) + Tailwind CSS + shadcn/ui primitives  
- **Backend**: Node.js + NestJS (REST) + OpenAPI/Swagger  
- **Database**: PostgreSQL via Prisma ORM  
- **Cache / Jobs**: Redis + BullMQ  
- **Auth**: Auth.js (NextAuth) with Google/GitHub OAuth, JWT where needed  
- **Monorepo**: Turborepo + pnpm  
- **Testing**: Vitest + Playwright (web), Jest (api)  
- **Infra targets**: Docker, Kubernetes, AWS (ECS/EKS, RDS, S3, CloudFront), Terraform  

### Monorepo layout

- **`apps/web`**: Next.js app (frontend)  
- **`apps/api`**: NestJS app (backend, REST + Swagger)  
- **`packages/db`**: Shared Prisma client + schema (PostgreSQL)  
- **`packages/queue`**: Shared BullMQ + Redis connection helpers  
- **Root config**: `turbo.json`, `tsconfig.base.json`, `pnpm-workspace.yaml`, Dockerfiles, etc.  

### Prerequisites

- **Node.js**: 20+ (recommended)  
- **pnpm**: installed globally (`pnpm -v` should work)  
- **PostgreSQL**: running locally (or remote connection)  
- **Redis**: running locally (for queues)  

### Environment variables

Copy the example env file and fill in secrets:

```bash
cp .env.example .env
```

Key variables:

- **`DATABASE_URL`**: PostgreSQL connection string  
- **`REDIS_URL`**: Redis connection string  
- **`NEXTAUTH_URL` / `NEXTAUTH_SECRET`**: Auth.js config  
- **OAuth**: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`  

### Install dependencies

```bash
pnpm install
```

### Development

- **Run everything via Turbo dev**:

```bash
pnpm dev
```

Typical ports:

- **Web**: `http://localhost:3000`  
- **API**: `http://localhost:4000/api`  
- **API docs (Swagger)**: `http://localhost:4000/api/docs`  

You can also run each app directly:

- **Web only**:

```bash
pnpm --filter @apps/web dev
```

- **API only**:

```bash
pnpm --filter @apps/api start:dev
```

### Database (Prisma + Postgres)

Prisma schema and client live in `packages/db`.

- **Generate client**:

```bash
pnpm --filter @packages/db generate
```

- **Run dev migrations**:

```bash
pnpm --filter @packages/db migrate:dev
```

- **Prisma Studio**:

```bash
pnpm --filter @packages/db studio
```

### Queues (Redis + BullMQ)

Shared queue utilities live in `packages/queue` and expose:

- A reusable **Redis connection**  
- An example **BullMQ queue** you can extend from apps/services  

Point `REDIS_URL` at your local or cloud Redis instance.

### Testing

- **Web (Vitest)**:

```bash
pnpm --filter @apps/web test
```

- **Web (Playwright e2e)**:

```bash
pnpm --filter @apps/web playwright
```

- **API (Jest)**:

```bash
pnpm --filter @apps/api test
```

### Docker (local containers)

Build production images:

- **Web**:

```bash
docker build -f Dockerfile.web -t web:local .
```

- **API**:

```bash
docker build -f Dockerfile.api -t api:local .
```

Run with your preferred compose/Kubernetes setup, wiring in `DATABASE_URL` and `REDIS_URL`.

### Next steps / TODOs

- **Auth**: Wire Auth.js providers (Google/GitHub) in `apps/web` and secure API routes.  
- **Infra**: Add Terraform modules and AWS deployment manifests (ECS/EKS, RDS, S3, CloudFront).  
- **Observability**: Integrate OpenTelemetry, Prometheus, Grafana, and Sentry in both `web` and `api`.  
- **CI/CD**: Add GitHub Actions workflows for lint/test/build and deploy pipelines.  