const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('user route OK');
    res.sendStatus(200);
});

router.get('/user', (req, res) => {
    const queryText = `GET * FROM users`;
    pool.query(queryText)
        .then((result) => {
            console.log(`back from the database with the users`, result);
            res.send(result.rows);
        }).catch((error) => {
            console.log(`error getting users`, error);
            res.sendState(500);
        })
})

module.exports = router;