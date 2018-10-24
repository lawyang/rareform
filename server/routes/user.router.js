const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const encryptLib = require('../modules/encryption');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const userStrategy = require('../strategies/user.strategy');



router.get('/', (req, res) => {
    console.log('user route OK');
    res.sendStatus(200);
});

router.get('/', rejectUnauthenticated, (req, res) => {
    // sends back user object from the database
    res.send(req.user);
})

// create new user
// handles post request with new user data
// Will encrpyt the password before it gets inserted into the database
router.post('/register',(req, res, next) => {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const queryText = `INSERT INTO users (username, hash) VALUES ($1, $2) RETURNING id`;
    pool.query(queryText, [username, password])
        .then((result) => {
            console.log(`successfully created new user`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error creating new user', error);
            res.sendStatus(500);
        })
})

//login
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

// logout
router.get('/logout', (req, res) => {
    req.logout();
    console.log(`successfully logged out`);
    res.sendStatus(200);
})

module.exports = router;