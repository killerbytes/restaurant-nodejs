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


const usersController = require('./controllers/users');
const home = require('./routes/home');
const shop = require('./routes/shop');
const auth = require('./routes/auth');

const adminIndex = require('./routes/admin/index');
const users = require('./routes/admin/users');
const products = require('./routes/admin/products');
const categories = require('./routes/admin/categories');
const transactions = require('./routes/admin/transactions');
const carts = require('./routes/admin/carts');

const utilsAPI = require('./routes/api/utils');
const categoriesAPI = require('./routes/api/categories');
const productsAPI = require('./routes/api/products');
const tablesAPI = require('./routes/api/tables');
const ordersAPI = require('./routes/api/orders');
const cartsAPI = require('./routes/api/carts');
const transactionsAPI = require('./routes/api/transactions');



passport.use(new Strategy({
},usersController.check));
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  usersController.get(id).then(user=>{
    cb(null, user);
  })
});

  
var app = express();

app.locals.format = require('date-fns').format
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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

app.use('/', home)
app.use('/login', auth)
app.use('/shop', shop)
// app.use('/logout', (req,res)=>{
//   req.logout()
//   res.redirect('/')
// })
app.use('/admin/', adminIndex)
app.use('/admin/products', products)
app.use('/admin/categories', categories)
app.use('/admin/users', users)
app.use('/admin/transactions', transactions)
app.use('/admin/carts', carts)

app.use('/api/categories', categoriesAPI)
app.use('/api/products', productsAPI)
app.use('/api/utils', utilsAPI)
app.use('/api/tables', tablesAPI)
app.use('/api/orders', ordersAPI)
app.use('/api/carts', cartsAPI)
app.use('/api/transactions', transactionsAPI)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on port ${port}!`))

module.exports = app;
