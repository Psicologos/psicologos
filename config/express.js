const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session  = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
// const layouts = require('express-ejs-layouts');
const expressLayouts  = require('express-ejs-layouts');

module.exports = (app) => {
  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'ejs');
  app.set('layout', 'layouts/main-layout');
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(expressLayouts);
  app.use(logger('dev'));
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')))
  app.use(session({
    secret: "psicologos",
    resave: true,
    saveUninitialized: true
  }));
  app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req,res,next) => {
    res.locals.title = "Ironfunding";
    res.locals.user = req.user;
    next();
  });
};
