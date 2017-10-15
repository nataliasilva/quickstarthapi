const dbjs = require("./../models/db");
const jwt = require("jsonwebtoken");
const key = require("./../../index").keyJwt;

exports.auth = (request, reply) => {
    
    const data = dbjs.auth(request.payload);
    if (data) {
        const token = jwt.sign({ name: data.name, username: data.username }, key, { expiresIn: '5600' });
        return reply({ success: true }).header("Authorization", `Bearer ${token}`).code(200);
    }
    return reply({ success: false }).code(401);
};
