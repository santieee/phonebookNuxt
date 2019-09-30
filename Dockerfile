FROM node:6.10.2

RUN mkdir -p /app

EXPOSE 3000

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

CMD [ "npm", "start" ]