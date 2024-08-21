'use strict';

const mongoose = require('mongoose');

const connectionString = `mongodb+srv://bibabibum0110:0886751110%40Minh@minhedulearning2.wzegb.mongodb.net/?retryWrites=true&w=majority&appName=MinhEduLearning2`;

mongoose
    .connect(connectionString)
    .then((_) => console.log(`Connected Mongodb Success`))
    .catch((err) => console.log(`Error connect: ${err}`));

if (1 === 0) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
}

module.exports = mongoose;
