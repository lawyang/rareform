const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const auth = require('../auth/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route endpoints
const userRouter = require('./routes/user.router');

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/users', userRouter);
app.use('/auth', auth);


app.get('/', (req, res) => {
    console.log('user route from server');
    res.sendStatus(200);
});

// App Set //
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });

