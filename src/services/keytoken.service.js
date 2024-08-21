'use strict';

const keytokenModel = require('../models/keytoken.model');

class KeyTokenService {
    static createKeyToken = async ({ user_id, public_key, private_key }) => {
        try {
            const token = await keytokenModel.create({
                publicKey: public_key,
                privateKey: private_key,
                user: user_id,
            });

            return token ? token.publicKey : null;
        } catch (error) {
            return error;
        }
    };
}

module.exports = KeyTokenService;
