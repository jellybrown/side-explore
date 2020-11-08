require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const handbookRouter = require('./routes/handbook');
const menuRouter = require('./routes/menu');
const sequelize = require('./models/mariadb').sequelize;

const app = express();
sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/handbook', handbookRouter);
app.use('/menu', menuRouter);

// Node.js native Promise 사용
mongoose.Promise = global.Promise;
// Connect mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

module.exports = app;
