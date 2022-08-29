const UserModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  data.isFreeAppUser=req.headers.isfreeappuser
  let user = await UserModel.create(data);
  res.send(user);
};

module.exports.createUser= createUser