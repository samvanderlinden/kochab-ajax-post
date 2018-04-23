const express=require('express');
const bodyParser = require('body-parser');
const recordRouter = require('./routes/record.route');
const app=express(); // this creates an instance of the express server
const PORT=5000;


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true})); //don't worry about this line yet, just remember to use it!!

// routes (get, post, put delete requests)
app.use('/record', recordRouter)

app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});
