const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

app.get('/api/getList', (req,res) => {
    // var list = ["item1", "item2", "item3"];
    res.json('helllo backend');
    console.log('Sent list of items');
});


// App Set //
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });

