const joi = require('joi');
const handler = require('./handler')

module.exports = [
    {
        path: '/api/v1/users',
        method: 'POST',
        handler: handler.create,
        config: {
            validate: {
                payload: joi.object({
                    name: joi.string(),
                    username: joi.string(),
                    password: joi.string()
                })
            }
        }
    }
];