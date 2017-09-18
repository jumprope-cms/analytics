# Start off with Node version 7.10.0
FROM node:7.10.0-alpine

# Create a directory to work with
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Instal dependencies
RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]
