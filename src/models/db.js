const lowdb = require('lowdb');
const crypto = require('crypto');
const filesync = require('lowdb/adapters/FileSync');
const adapter = new filesync('hapicurse.json');
const db = lowdb(adapter);

db.defaults({
    users: []
}).write();

exports.create = user => {
    user.password = crypto.createHash("md5").update(user.password).digest("hex");

    db.get('users').push(user).write();

    const findUser = db.get('users').find(user).value();

    return findUser
}

exports.auth = user =>{
    user.password = crypto.createHash("md5").update(user.password).digest("hex");
    const findUser = db.get('users').find(user).value();
    return findUser;
};