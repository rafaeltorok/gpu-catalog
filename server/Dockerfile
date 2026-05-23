FROM node:20-alpine AS production

WORKDIR /usr/src/app/server

COPY . .

RUN npm ci

EXPOSE 3001

CMD ["node", "./server.js"]