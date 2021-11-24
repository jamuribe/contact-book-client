FROM node:14-bullseye
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . ./
EXPOSE 8080/TCP
CMD ["npm", "start"]