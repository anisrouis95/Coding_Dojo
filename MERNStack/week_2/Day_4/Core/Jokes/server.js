// server.js
const express = require('express');
const mongoose = require('./config/mongoose.config');
const jokesRoutes = require('./routes/jokes.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8090;

app.use(express.json());
app.use(express.urlencoded());
require('./routes/jokes.routes')(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
