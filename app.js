const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const displayRoutes = require('./routes/display');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
});
app.use('/feed', feedRoutes);
app.use( displayRoutes);

app.listen(8080);