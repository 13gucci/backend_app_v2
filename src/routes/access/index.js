'use strict';

const express = require('express');
const accessController = require('../../controllers/access.controller');
const { apiKey, permissions } = require('../../auth/checkAuth');
const router = express.Router();

// check apiKey
router.use(apiKey);

// check permission
router.use(permissions('0000'));

// [POST] /shop/sign-up
router.post('/shop/sign-up', accessController.signUp);

// Export
module.exports = router;
