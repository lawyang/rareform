const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    pool.query(`SELECT user.id, username FROM users WHERE id = $1`, [id])
        .then((result) => {
            const user = result && result.rows && result.row[0];
            console.log(`user is:`, user);
            if (!user) {
                done(null, false, {
                    message: `Incorrect Credentials ⚠️`
                });
            } else {
                done(null, user, {
                    message: `User Found ✅ `
                })
            };
        }).catch((error) => {
            console.log(`Error`, error);
            done(error);
        });
});

passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'username',
  }, ((req, username, password, done) => {
      pool.query('SELECT * FROM users WHERE username = $1', [username])
        .then((result) => {
          console.log('result.rows:', result.rows);
          const user = result && result.rows && result.rows[0];
          if (user && encryptLib.comparePassword(password, user.hash)) {
            // all good! Passwords match!
            done(null, user);
          } else if (user) {
            // not good! Passwords don't match!
            done(null, false, { message: 'Incorrect credentials.' });
          } else {
            // not good! No user with that name
            done(null, false);
          }
        }).catch((err) => {
          console.log('error', err);
          done(null, {});
        });
})));

module.exports = passport;