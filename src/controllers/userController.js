const UserModel= require("../models/userModel")


const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

    const createUser= async function (req, res) {
        res.send({msg:"hello Program is run secssesfuy And U reach Middleware"})
    
    }

<<<<<<< HEAD
const createUser1= async function (req, res) {
=======
const commonHandler = async function(req, res, next) {
    console.log('I am inside the common route handler')
    next()
    //res.send({status: true, msg: "Hi there!"})
}

module.exports.commonHandler = commonHandler



















const createUser= async function (req, res) {
>>>>>>> 9e4c16d4ea1ae2e8bdde64eac93caf8467fd54bc
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})

}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode