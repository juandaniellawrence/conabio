FROM node:14

ENV BASE_URL=localhost
ENV PORT =3333

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:1.17
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/build .
