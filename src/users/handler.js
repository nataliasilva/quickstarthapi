const dbjs = require("./../models/db");
exports.create = (request, reply) => {
    console.log(request.payload);
    const data = dbjs.create(request.payload);
    reply({ data }).code(201);
};
