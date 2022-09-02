const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const meamController= require("../controllers/meamController")
const waetherController= require("../controllers/waetherController")



router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

router.post("/cowin/getDistrictSessions", CowinController.getDistrictSessions)


router.get("/getsortcity", waetherController.getsortcity);
 

router.post("/createMeme",meamController.createMeme);
router.get("/getAllMemes",meamController.getAllMemes);

module.exports = router;