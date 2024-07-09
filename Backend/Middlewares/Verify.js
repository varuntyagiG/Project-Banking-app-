const express = require("express");
let jwt = require("jsonwebtoken");
const User = require("../Db/db");
let JWT_Secrat = "Varun";

async function Verification(req, res, next) {
  let token_Bearer = req.headers.authorization;

  if (!token_Bearer || !token_Bearer.startsWith("Bearer")) {
    return res.status(403).json({});
  }

  const token = token_Bearer.split(" ")[1];
  try {
    let UserDetails = jwt.verify(token, JWT_Secrat);
    if (UserDetails.email) {
      let email = UserDetails.email;
      let userFind = await User.findOne({ email });
      req.id = userFind._id; // pass id in req
      next();
    } else {
      return res.json({
        message: "User not verified",
      });
    }
  } catch (err) {
    res.json("Token not verified");
  }
}

module.exports = Verification;
