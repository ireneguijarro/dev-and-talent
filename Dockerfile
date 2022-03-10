FROM node:16
LABEL app="dev-and-talent" stack.binary="node" stack.version="16"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
COPY ormconfig.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY src src

RUN npm run build
RUN npm run test

EXPOSE 3000
CMD [ "npm", "run", "dev" ]