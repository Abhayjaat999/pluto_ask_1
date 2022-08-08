const express = require('express');
const abc = require('../introduction/intro')
const oneSymbol = require('../logger/logger')
const ask1 = require('../util/helper')
const ask2 = require('../validator/formatter')
const router = express.Router();
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    oneSymbol.time()
    ask1.month()
    oneSymbol.intro()
    ask1.InfoBatch()
    ask2.getTrim()
    ask2.lowerw()
    ask2.toUpper()
    
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    console.log(lodash.chunk(month,4));
    const odd=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(odd,9))

    res.send('My second ever api!')
});

router.get('/student-detaile/:name',function(req,res){
    console.log("this is the request "+JSON.stringify(req.params))
    let reqParams=req.params
    let studentName=reqParams.name
    console.log();
})

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason agit s 