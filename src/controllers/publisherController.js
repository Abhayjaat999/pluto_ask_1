const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getpublisherData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}

module.exports.createPublisher= createPublisher
module.exports.getpublishersData= getpublisherData