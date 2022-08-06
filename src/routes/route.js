const express = require('express');
const abc = require('../introduction/intro')
const ask = require('../logger/logger')
const ask1 = require('../util/helper')
const ask2 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    ask.time()
    ask1.month()
    ask.intro()
    ask1.InfoBatch()
    ask2.getTrim()
    ask2.lowerw()
    ask2.toUpper()
    
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason agit s 