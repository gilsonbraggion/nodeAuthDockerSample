# Dockerfile
# Use official Node.js image
FROM --platform=linux/amd64 node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3001:3001

CMD ["node", "server.js"]