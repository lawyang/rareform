const express = require('express');
const router = express.Router();
const pool = require('../server/modules/pool');

router.get('/', (req, res) => {
    res.json({
        message: '🍏'
    });
});

router.get('/users', (req, res) => {
    let queryText = `SELECT * FROM users`;
    pool.query(queryText)
        .then((result) => {
            console.log(`these are the resuls`, result)
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/signup', (req, res) => {
    res.json({
        message: '✅'
    });
});

module.exports = router;
