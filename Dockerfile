# Dockerfile
# Use official Node.js image
FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000:3000
CMD ["node", "server.js"]