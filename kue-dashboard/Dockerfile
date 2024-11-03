FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3050

CMD ["node", "--no-warnings", "index.js"]
