'use strict';
const jwt = require('jsonwebtoken');

const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        // accessToken
        const accessToken = await jwt.sign(payload, publicKey, {
            expiresIn: '2d',
        });

        const refreshToken = await jwt.sign(payload, privateKey, {
            expiresIn: '7d',
        });

        // verify
        // jwt.verify(accessToken, publicKey, (err, decoded) => {
        //     if (err) {
        //         console.error('Error verify::', err);
        //     } else {
        //         console.log('Decoded::', decoded);
        //     }
        // });

        return { accessToken, refreshToken };
    } catch (error) {
        return error;
    }
};

module.exports = {
    createTokenPair,
};
