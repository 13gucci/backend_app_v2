'use strict';

const apikeyModel = require('../models/apikey.model');
const crypto = require('node:crypto');

class ApiKeyService {
    static findById = async (key) => {
        // const newKey = await apikeyModel.create({
        //     key: crypto.randomBytes(64).toString('hex'),
        //     permissions: ['0000'],
        // });

        // console.log(newKey);
        const objKey = await apikeyModel.findOne({ key, status: true }).lean();

        return objKey;
    };
}

// Export
module.exports = ApiKeyService;
