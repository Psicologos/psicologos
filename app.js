const express      = require('express');
const session  = require('express-session');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const expressLayouts  = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const MongoStore   = require('connect-mongo')(session);
const passport   = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const User = require('./models/User');
const bcrypt = require("bcrypt");

mongoose.connect('mongodb://localhost/psicologos');

const app = express();

// Middlewares configuration
app.use(logger("dev"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout');
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

// default value for title local
// app.locals.title = 'Express - Generated with IronGenerator';


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "psicologos",
  resave: true,
  saveUninitialized: true
}));



app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findOne({ "_id": id }, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));

app.use((req,res,next) => {
  res.locals.title = "Ironfunding";
  res.locals.user = req.user;
  next();
});

const index = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/', index);
// app.use('/users', users);
app.use('/', authRoutes);



//require('./passport')(app);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
