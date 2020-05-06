FROM keymetrics/pm2:10-alpine



WORKDIR /app

COPY package.json yarn.lock ./


RUN yarn install



COPY . package.json yarn.lock ecosystem.config.js ./ 

EXPOSE 3000 27017

CMD pm2 start --no-daemon --watch ecosystem.config.js
