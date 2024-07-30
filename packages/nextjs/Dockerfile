FROM node:18-alpine
WORKDIR /opt/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
