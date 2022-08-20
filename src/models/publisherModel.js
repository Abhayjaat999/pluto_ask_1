const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {

    publisherName: String,
    since:Number,
    headQuarter: String,
    Ratings:Number
}, { timestamps: true });

module.exports = mongoose.model('publisher', publisherSchema)
