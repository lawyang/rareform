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



function validateUser(user){
    const validEmail = typeof user.email == 'string' && user.email.trim() !== '';
    const validPassword = typeof user.password == 'string' && user.password.trim() !== '' && user.password.trm().length >= 6;
    return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
    if(validateUser(req.body)) {
        res.json({
            message: '✅'
        })
    } else {
        next(new Error('Invalid User'));
    }
});

module.exports = router;
