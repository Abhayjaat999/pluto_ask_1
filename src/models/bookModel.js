const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorId: { type: ObjectId, ref: "Author"}, 
    price: Number,
    ratings: Number,
    PublisherId: { type: ObjectId, ref: "publisher" },
    isHardCove:Boolean,
    rating :Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)

// let String="     hello       hello        "     
// let he= String.trim().split("").filter(e=>e.trim()).join(" ")
// // let he= String.trim().filter((e) => e).join(" ");
// console.log(he);

