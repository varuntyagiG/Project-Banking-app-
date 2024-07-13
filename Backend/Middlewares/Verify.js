const express = require("express");
let jwt = require("jsonwebtoken");
let JWT_Secrat = "Varun";

async function Verification(req, res, next) {
  let token_Bearer = req.headers.authorization;

  if (!token_Bearer || !token_Bearer.startsWith("Bearer")) {
    return res.status(403).json({});
  }

  const token = token_Bearer.split(" ")[1];
  try {
    let UserDetails = jwt.verify(token, JWT_Secrat);
    console.log(UserDetails);
    if (!UserDetails) {
      return res.json({
        message: "User not verified",
      });
    } else {
      req.id = UserDetails.userId;
      next();
    }
  } catch (err) {
    res.json("Token not verified");
  }
}

module.exports = Verification;
