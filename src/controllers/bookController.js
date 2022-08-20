const { isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let autherData = req.body.author
   let publisherData=req.body.Publisher
   let author= await authorModel.find().select({_id:1})
   let authorId=author[0]._id
   let publisher=await publisherModel.find().select({_id:1})
   let PublisherId=publisher[0]._id

   if (autherData==true && publisherData== isValidObjectId()){
        if(autherData==authorId && publisherData==PublisherId){
            let sevedata = await bookmodel.create(req.body)
            res.send({msg : sevedata})
        } else{
            res.send({error : "auther or publisher is not present"})
        }
   }else{
        res.send({error:"auther or publisher is mandatory" })
   }

}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['authorId','PublisherId']) 
    res.send({data: specificBook})
}


const HardCove = async function (req, res) {
   
    let data =   await publisherModel.find({publisherName : ["Penguin","HarperCollins"]}).select({_id : 1})
    let bookid = await bookModel.updateMany({ PublisherId : data },{ $set : {isHardCove : true , new : true }},{upsert : true})

    let authorIds = await authorModel.find( { rating : { $gt : 3.5 }}).select({_id : 1})
    let rating = await bookModel.updateMany({authorId : authorIds }, { $inc : {price : 5 }},{upsert : true})
 
    res.send({ data: bookid , rating})
  }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.HardCove= HardCove
module.exports.getBooksWithAuthor= getBooksWithAuthorDetails


