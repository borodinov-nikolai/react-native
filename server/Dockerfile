FROM node:20-alpine

WORKDIR /root/app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 8080

CMD npx prisma db push && npm run start:prod