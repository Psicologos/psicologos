const express      = require('express');
const session  = require('express-session');
const favicon      = require('serve-favicon');
const MongoStore   = require('connect-mongo')(session);

require('./config/database');
const app = express();
require('./config/passport/passport')(app);
require('./config/express')(app);

//Routes
const index = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/', index);
app.use('/', authRoutes);

require('./config/error-handler')(app);


module.exports = app;
