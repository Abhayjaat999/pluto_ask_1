const Name = "Abhay Singh"

let welCome = function() {
    console.log('Welcome to my application. I am ', Name,' and a part of FunctionUp Plutonium cohort.')
}

let onTime= function(){
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    
    // prints date & time in YYYY-MM-DD format
    console.log(date + "-" + month + "-" + year); 

}

module.exports.name = Name
module.exports.intro = welCome
module.exports.time = onTime