FROM keymetrics/pm2:10-alpine



WORKDIR /app

COPY package.json yarn.lock ./


RUN yarn install



COPY . package.json yarn.lock ecosystem.config.js ./ 

EXPOSE 3000 27017

<<<<<<< HEAD
CMD node bin/www
=======
CMD npm start
>>>>>>> abd9bb2483328425a6e536ca71a6da06a5b792aa
