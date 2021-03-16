FROM node:12.21.0-alpine
RUN mkdir -p /usr/src/analytic-client
WORKDIR /usr/src/analytic-app
COPY package.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]