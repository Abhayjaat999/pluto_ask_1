let axios = require("axios")

let getsortcity=async function(req,res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[]
        for (i=0;i<cities.length;i++)
        {
            let obj={city:cities[i]}
            let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=254c5e65d99fe885f29b4ccc4a3660f9`)
            obj.temp=resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted=cityObjArray.sort(function(a , b){return a.temp - b.temp})
        res.status(200).send({status:true,data:sorted});
    }catch(err){
       return res.status(500).send({status:false,msg:"server error"});
    }
}
module.exports.getsortcity=getsortcity