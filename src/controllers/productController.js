const productModel = require("../models/productModel");

const createproduct = async function (req, res) {
  let product = req.body;
  let createproduct = await productModel.create(product);
  res.send({ data: createproduct });
};

module.exports.createproduct =  createproduct;
