
let onMonth= function(){
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let d = new Date();
let name = month[d.getMonth()];
console.log(name)
}

const batchName = "Plutonium"
const week = "week-3"
const day = "day-3"
const topic = "Nodejs module system."

const batchInfo = function() {
    console.log('My batch',batchName,"today's",week,",",day,"and today's topic",topic)
}

module.exports.month = onMonth
module.exports.InfoBatch = batchInfo