const mongoose = require('mongoose');
const users = require('./users');

module.exports = (req, res, next) => {
    const tenant = users[req.headers['tenant']];
    console.log('TENANT', tenant);
    if (!tenant) {
        return res.status(500).end();
    }
    mongoose.connect(tenant.url);
    return next();
};