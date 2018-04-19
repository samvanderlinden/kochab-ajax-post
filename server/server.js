const express=require('express');
const app=express(); // this creates an instance of the express server
const PORT=5000;

// this will live in database shortly
const recordCollection=require('./modules/record-collection');

app.use(express.static('server/public'));

// routes (get, post, put delete requests)
app.get('/records', function(req, res){
    console.log(recordCollection);
    res.send(recordCollection); 
});

app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});
