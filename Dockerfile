# ========================================
# ビルドステージ
# ========================================
FROM node:22 AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# ========================================
# 本番用ステージ
# ========================================
FROM nginx:alpine-slim AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
