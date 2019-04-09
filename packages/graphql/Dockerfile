FROM mhart/alpine-node:11.13

RUN yarn global add pm2

WORKDIR /usr/src/app/graphql

ENV FORCE_COLOR=1
ENV CI=true
ENV NODE_ENV=production

COPY . .

EXPOSE 4000

RUN ls -la

CMD ["pm2-runtime", "ecosystem.config.js"]
