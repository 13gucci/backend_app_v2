const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// Init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Init database
require('./database/init.mongodb');
// const { checkOverload } = require('./helpers/check.connect.js');
// checkOverload();

// Init routing
app.use('/', require('./routes/index'));
// Handle error

// Export
module.exports = app;
