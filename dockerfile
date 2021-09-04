FROM node:14

ENV BASE_URL=localhost
ENV PORT =3333
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]

FROM nginx:1.17
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/build .
