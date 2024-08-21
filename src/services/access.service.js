'use strict';
const shopModel = require('../models/shop.model');
const bcrypt = require('bcrypt');
const crypto = require('node:crypto');
const KeyTokenService = require('./keytoken.service');
const { createTokenPair } = require('../auth/auth.utils');
const { getInforData } = require('../utils');

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN',
};

class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            // step 1: check email exists
            const holderShop = await shopModel.findOne({ email }).lean(); // lean: return tiny object

            if (holderShop) {
                return {
                    code: 'xxx',
                    message: 'Email holder already registered',
                };
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const newHolderShop = await shopModel.create({
                name,
                email,
                password: hashPassword,
                roles: [RoleShop.SHOP],
            });

            // if create success new shop
            if (newHolderShop) {
                // create privateKey, publicKey

                const privateKey = crypto.randomBytes(64).toString('hex');
                const publicKey = crypto.randomBytes(64).toString('hex');

                const keyStore = await KeyTokenService.createKeyToken({
                    user_id: newHolderShop._id,
                    public_key: publicKey,
                    private_key: privateKey,
                });

                // if create fail public
                if (!keyStore) {
                    return {
                        code: 'xxx',
                        message: 'keyStore error',
                    };
                }

                // create tokens pair
                const tokens = await createTokenPair({ user_id: newHolderShop._id, email }, publicKey, privateKey);

                return {
                    code: 201,
                    metadata: {
                        shop: getInforData({ fields: ['_id', 'email', 'name', 'roles'], object: newHolderShop }),
                        tokens,
                    },
                };
            }

            return {
                code: 200,
                metadata: null,
            };
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error',
            };
        }
    };
}

module.exports = AccessService;
