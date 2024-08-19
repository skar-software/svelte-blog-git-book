# Start with Node.js for the frontend
FROM node:20 AS blogger

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build
RUN npm prune --production

EXPOSE 4173

CMD ["npm", "run", "start"]
