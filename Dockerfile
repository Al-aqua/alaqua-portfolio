ARG BUN_VERSION=1.3.5

# Build stage
FROM oven/bun:${BUN_VERSION} AS builder

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --frozen-lockfile

COPY . .

ENV NODE_ENV=production
RUN bun run build

# Production stage
FROM oven/bun:${BUN_VERSION}-slim AS runner

RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

USER bun

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["bun", "run", "./build/index.js"]
