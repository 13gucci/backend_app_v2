const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// Init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Init database

// Init routing
app.get('/', (req, res) => {
    const strCompress = 'Hello Guys';

    res.status(500).json({
        message: 'Welcome',
        metadata: strCompress.repeat(20000),
    });
});

// Handle error

// Export
module.exports = app;
