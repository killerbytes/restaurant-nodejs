var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var path = require('path');
var fs = require('fs');
var flash = require('connect-flash');
const Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var validator = require('express-validator');
var cors = require('cors');
var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();

const usersController = require('./controllers/users');
const notificationEvents = require('./controllers/notifications');
const error = require('./utils/error')

const categories = require('./routes/api/categories');
const products = require('./routes/api/products');
const tables = require('./routes/api/tables');
const orders = require('./routes/api/orders');
const carts = require('./routes/api/carts');
const transactions = require('./routes/api/transactions');
const sales = require('./routes/api/sales');

const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);

require('./utils/socket').initialize(io)


passport.use(new Strategy({
}, usersController.check));
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  usersController.get(id).then(user => {
    cb(null, user);
  })
});



app.locals.format = require('date-fns').format
app.locals.currency = require('currency.js')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('socketio', io)
app.use(flash());
app.use(bodyParser.json());
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(validator())
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {
  res.locals.login = req.user;
  next();
});

// app.use('/logout', (req,res)=>{
//   req.logout()
//   res.redirect('/')
// })

app.use('/api/categories', categories)
app.use('/api/products', products)
app.use('/api/tables', tables)
app.use('/api/orders', orders)
app.use('/api/carts', carts)
app.use('/api/transactions', transactions)
app.use('/api/sales', sales)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Endpoint does not exists');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(error.response(err.status, err.message));
});

var port = process.env.PORT || 8000;

notificationEvents(io)

if (!module.parent) {
  http.listen(port, () => console.log(`listening on port ${port}!`))
}
module.exports.socketio = io
module.exports = app;
