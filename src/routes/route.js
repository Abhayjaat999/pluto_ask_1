const express = require('express');
let app = express()
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { application } = require('express');
const router = express.Router();


router.get('/sol1', function (req, res) {
        var arr = [1, 2, 3, 4, 6, 7, 8];
        function findNumber(arr) {
        var n = arr.length;
        var total = ((n + 2) * (n + 1)) / 2;
        for (let i = 0; i < n; i++) {
            total -= arr[i];
        }
        return total;
        }

        let element=findNumber(arr)
        
   res.send({data : element})
});


router.get('/sol2', function (req, res) {
    let arr = [ 13, 14, 15, 17, 18];
    let place=arr.length
    
let total=0;
for(var i in arr){
  total +=arr[i];
}
let f=arr[0]
let l=arr.pop()
let sum=(place +1)*(f+l)/2
let numb=sum-total

    
    
res.send({data : numb})
});


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    // abc.printName()
    

    res.send('My second ever api!')
});

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

router.get('/movies', function (req, res){
    let movies = [' The Shawshank Redemption ',' Master ', ' The Godfather ', ' Justice League snyder cut ']
    res.send(movies)
})

router.get('/movies/:indexNum', function(req,res){
    const movie= [' The Shawshank Redemption ',' Master ', ' The Godfather ', ' Justice League snyder cut ','Black Panther']
    let val=req.params
    index=val.indexNum-1
    console.log(index)
    if(index<movie.length)
    res.send(movie[index])
    else if(index==-1)
    res.send('please enter valid input')
    else
    res.send('please enter valid input between 1 to 5')
})



router.get('/moviesid/indexNumb', function(req,res){
    const movie= [ {id :1,name: "The Shawshank Redemption"}, 
                    { id:2,name: "Master"},
                    { id : 3,name: "The Godfather"}, 
                    { id : 4,name: "Justice League snyder cut"},
                    { id : 5,name: "Black Panther"}]
   
    res.send(movie)
})

router.get('/moviesCall/:indexNum', function(req,res){
    const movie= [ {id :1,name: "The Shawshank Redemption"}, 
                    { id:2,name: "Master"},
                    { id : 3,name: "The Godfather"}, 
                    { id : 4,name: "Justice League snyder cut"},
                    { id : 5,name: "Black Panther"}]
      
    let val=req.params
    index=val.indexNum
    console.log(index)

    const inputId = index
    const foundObj = movie.find(({ id }) => id == inputId);
    if (foundObj) 
    res.send( inputId +" => "+ foundObj.name)

})

router.get('/student-details/:name', function(req, res){
  
    let requestParams = req.params
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;