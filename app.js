var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
var logger = require('morgan');
global.db = require('./db/mongo')
const session = require('express-session')/*
const redis = require('redis');
const redisStore = require('connect-redis')(session);
*/
var app = express();

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

/*
var sessionStore = new redisStore({ host: 'redis', port: 6379, client: redis.createClient(process.env.REDIS_URL), ttl: 86400 })

app.use(session({
  secret: 'monargentSession',
  name: '_redis_monargent_session_',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: sessionStore,
}));*/

app.use('/', require('./router'))

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
