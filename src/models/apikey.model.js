'use strict';

const { model, Schema, Types } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Apikey';
const DOCUMENT_COLLECTION = 'Apikeys';

// Declare the Schema of the Mongo model
const apiKeySchema = new Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
        permissions: {
            type: [String],
            required: true,
            enum: ['0000', '1111', '2222'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: '30d', // This will automatically delete expired API keys
        },
    },
    {
        timestamps: true,
        collection: DOCUMENT_COLLECTION,
    }
);

//Export the model
module.exports = model(DOCUMENT_NAME, apiKeySchema);
