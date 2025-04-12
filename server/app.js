const express = require('express');

const app = express();

const cors = require('cors');

require('./config/database');

const auth = require('./routes/auth');
const list = require('./routes/list');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world");
});

// setting up a middleware function for the authentication.
app.use('/api/v1', auth);

// setting up a middleware function for the todo list
app.use('/api/v2', list);

// starting the server that listens on port 8000.
app.listen(8000, () => {
    console.log("Server Started!!!");
});