const joi = require('joi');
const handler = require('./handler')

module.exports = [
    {
        path: '/api/v1/sessions',
        method: 'POST',
        handler: handler.auth,
        config: {
            validate: {
                payload: joi.object({
                    username: joi.string(),
                    password: joi.string()
                })
            }
        }
    }
];