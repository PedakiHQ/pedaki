FROM node:18-slim AS base

RUN apt-get update -y && apt-get install -y openssl ca-certificates && apt-get clean

FROM base AS builder
WORKDIR /app

# Install corepack pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

COPY turbo.json ./
COPY .npmrc ./
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY app/package.json ./app/

RUN --mount=type=cache,target=/pnpm/store pnpm install --frozen-lockfile

COPY app ./app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm build --filter app

# TODO: add prisma
# # Copy node_modules/.prisma to a tmp folder
# RUN mkdir -p tmp
# RUN cp -r node_modules/.prisma tmp/.prisma

# Delete node_modules and reinstall only production dependencies
RUN npx rimraf --glob ./**/node_modules
# TODO: remove no-frozen-lockfile
RUN --mount=type=cache,target=/pnpm/store pnpm install --frozen-lockfile --production --filter app

# TODO: add prisma
# # Copy back node_modules/.prisma
# RUN cp -r tmp/.prisma node_modules

FROM base AS runner
WORKDIR /app

COPY --from=builder /app/app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/app/.next/static ./.next/static

## Load public env vars
ARG PORT=80

ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT=$PORT

ENV NODE_ENV=production
ENV SKIP_SERVER_ENV_CHECK=true

EXPOSE $PORT

CMD ["node", "server.js"]
