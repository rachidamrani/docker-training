FROM node:12

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

# RUN node server.js <-- that is incorrect, we need to run the server in the container not in the image!
CMD ["node", "server.js"]
# If you do not speceify a CMD, the CMD of the base image will be executed. 
# With no base image and no CMD, you'd get an error.
