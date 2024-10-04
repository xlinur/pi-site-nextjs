FROM node:20-alpine AS base

WORKDIR /app

COPY package.json  ./

RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine as release

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]
