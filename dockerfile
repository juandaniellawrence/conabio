FROM node:14


ENV BASE_URL=localhost
ENV PORT =3333
ENV NODE_ENV=production


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
FROM nginx:1.17
WORKDIR /usr/share/nginx/html
COPY . .


CMD [ "node", "server.js" ]
