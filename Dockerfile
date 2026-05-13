FROM node:22-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml svelte.config.js tsconfig.json vite.config.ts .npmrc ./
RUN pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm exec svelte-kit sync || true

COPY . .

ENV NODE_ENV=production
RUN pnpm run build

FROM node:22-alpine AS runner

RUN apk add --no-cache wget

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

USER node

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/health >/dev/null || exit 1

CMD ["node", "./build/index.js"]
