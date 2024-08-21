'use strict';

// level 0
const dev = {
    app: {
        port: 3000,
    },
    db: {
        url: 'mongodb+srv://bibabibum0110:0886751110%40Minh@minhedulearning2.wzegb.mongodb.net/?retryWrites=true&w=majority&appName=MinhEduLearning2',
        name: 'dbDev',
    },
};

// level 1
const pro = {
    app: {
        port: 3000,
    },
    db: {
        url: 'mongodb+srv://bibabibum0110:0886751110%40Minh@minhedulearning2.wzegb.mongodb.net/?retryWrites=true&w=majority&appName=MinhEduLearning2',
        name: 'dbProduct',
    },
};

const config = { dev, pro };
module.exports = config['dev'];
