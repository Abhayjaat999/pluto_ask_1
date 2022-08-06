const trim=function(){
const greeting = "    Function Up    ";
console.log(greeting,'to==>' ,greeting.trim());
}
const lower=function(){
    const sentence = 'THIS LOWER CASE ';
console.log('THIS LOWER CASE     to==> ',sentence.toLowerCase());
}
const upper=function(){
const sentence1 = 'this upper case';

console.log('this upper case     to==> ',sentence1.toUpperCase());
}

module.exports.getTrim = trim
module.exports.lowerw=lower
module.exports.toUpper=upper