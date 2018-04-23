const express = require('express');

const router = express.Router();

const recordCollection = require('../modules/record-collection');

router.get('/', function(req, res){ //route is actually /record/record. Price of entry is /record.
    res.send(recordCollection); 
});

router.post('/', function(req, res){
    console.log(req.body); //whatever data we send on our post is req.body in our server
    recordCollection.push(req.body);
    res.sendStatus(200);
});

module.exports = router;