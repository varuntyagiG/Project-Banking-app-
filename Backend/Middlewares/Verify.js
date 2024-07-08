const express = require("express");
let jwt = require("jsonwebtoken");
const User = require("../Db/db");
let JWT_Secrat = "Varun";

async function Verification(req, res, next) {
  let token_Bearer = req.headers.authorization;

  if (!token_Bearer || !token_Bearer.startsWith("Bearer"))
    res.status(403).json({});

  const token = token_Bearer.split(" ")[1];

  let UserDetails = jwt.verify(token, JWT_Secrat);
  let email = UserDetails.email;
  let userFind = await User.findOne({ email });
  req.id = userFind._id; // pass id in req
  console.log(req.id);
  next();
}

module.exports = Verification;
