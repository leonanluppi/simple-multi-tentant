const express = require('express');
const router = express.Router();
const getTenant = require('./get-tenant-middleware');

router.get('/tenant', getTenant, (req, res) => {
    return res.status(200).end();
});

module.exports = router;