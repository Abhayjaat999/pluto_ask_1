const OrderModel = require("../models/OrderModel");
const UserModel = require("../models/userModel");
const productModel = require("../models/productModel");

const createOrder = async function (req, res) {
  let data = req.body;
  let isFree=req.headers.isfreeappuser
  if(!isFree){
    return res.send({ mes:"require header not present"})
  }
  let user=await UserModel.findById({_id:data.userId})
  let product=await productModel.findById({_id:data.productId})
  if(!user || !product){
  return res.send({ mes:"user or prodect id does not exist"})
  }
  let savedData = await (await OrderModel.create(data));
  res.send({ data: savedData });
};

module.exports.createOrder = createOrder;