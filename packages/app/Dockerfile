FROM mhart/alpine-node:11.13

ENV NODE_ENV=production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /usr/src/app/client

RUN yarn install \
  --network-timeout 1000000 \
  --ignore-optional --skip-integrity-check \
  --ignore-scripts \
  --ignore-engines && \
  yarn cache clean

COPY .next .

RUN ls -la .
