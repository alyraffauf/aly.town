# syntax=docker/dockerfile:1
FROM docker.io/oven/bun:1.4.2-alpine AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

COPY index.html tsconfig.json vite.config.ts ./
COPY src ./src
COPY scripts ./scripts
COPY public ./public
RUN bun run build

FROM docker.io/nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
