const express      = require('express');
const session  = require('express-session');
const favicon      = require('serve-favicon');
const MongoStore   = require('connect-mongo')(session);

require('./config/database');
const app = express();
require('./config/passport/passport')(app);
require('./config/express')(app);

//Configuracion de Routes
const index = require('./routes/index');
const authRoutes = require('./routes/auth');
const profile = require('./routes/user/show');

app.use('/', index);
app.use('/', authRoutes);
app.use('/', profile);

require('./config/error-handler')(app);


module.exports = app;
