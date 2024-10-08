'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const _SECONDS = 5000;

// Count Connection
const countConnect = () => {
    const numConnection = mongoose.connections.length;

    console.log(`Number of connections::${numConnection}`);
};

// Check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        //Example maximum number of connections based on number of cores
        const maxConnections = numCores * 5;

        console.log(`Active connection::${numConnection}`);
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnection > maxConnections) {
            console.log(`Connection overload detected`);
        }
    }, _SECONDS); // Moniter every 5 seconds
};

module.exports = {
    countConnect,
    checkOverload,
};
