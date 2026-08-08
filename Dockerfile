# Step 1: Build Phase
FROM node:22-alpine AS builder
WORKDIR /app

# Dependencies copy & install karein
COPY package*.json ./
RUN npm install

# Source code copy karke production build banayein
COPY . .
RUN npm run build

# Step 2: Production Phase (Nginx with Alpine)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Purani static files clean karein
RUN rm -rf ./*

# Builder stage se dist/build folder copy karein
COPY --from=builder /app/dist .

# Custom Nginx configuration (SPA routing support ke liye)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]