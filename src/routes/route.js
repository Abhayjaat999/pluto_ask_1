const express = require('express');
const router = express.Router();
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const userController= require("../controllers/userController")

const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/myCreateProduct",productController.createproduct)
router.post("/myCreatreUser" ,commonMW.mid1,userController.createUser)
router.post("/myCreatreOrder" ,commonMW.mid1 , orderController.createOrder)

module.exports = router;