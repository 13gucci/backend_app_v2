'use strict';
const mongoose = require('mongoose');

const connectionString =
    'mongodb+srv://bibabibum0110:0886751110%40Minh@minhedulearning2.wzegb.mongodb.net/?retryWrites=true&w=majority&appName=MinhEduLearning2';
const { countConnect } = require('../helpers/check.connect');

class Database {
    static instance = null;

    constructor() {
        if (Database.instance) {
            throw new Error('Use Database.getInstance() instead of new.');
        }
        this.connect();
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        // Max Pool Size: nhóm kết nối
        mongoose
            .connect(connectionString, {
                maxPoolSize: 50,
                dbName: 'shopDEV',
            })
            .then((_) => {
                console.log(`Connected Mongodb Success Pro`, countConnect());
            })
            .catch((err) => console.log(`Error connect: ${err}`));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

// Export
module.exports = instanceMongodb;
