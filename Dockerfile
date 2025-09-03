from node:24-alpine
CMD ["npm", "start"]
WORKDIR /app
COPY ./tsconfig.json .
COPY package.json .

RUN npm install

COPY ./src ./src

RUN npm run build


