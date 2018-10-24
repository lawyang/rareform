const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
 const passport = require('./strategies/user.strategy');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route endpoints
const userRouter = require('./routes/user.router');


// Routes
app.use('/users', userRouter);

// Passport Session Config
app.use(sessionMiddleware);

// initialize Passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    console.log('user route from server');
    res.sendStatus(200);
});

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });

