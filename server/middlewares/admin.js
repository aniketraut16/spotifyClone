const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const UserModel = require("../models/UserModel");

const admin = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      console.log(user);
      req.createdBy = user.id;
      const userdetails = await UserModel.findOne({ _id: user.id });
      console.log(userdetails.isCreater);

      if (!userdetails.isCreater) {
        return res.status(401).json({ message: "Permission Denied" });
      }
    } else {
      return res.status(401).json({ message: "Unauthorized User" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized User" });
  }
};

module.exports = admin;
