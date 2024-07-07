const express = require("express");
let jwt = require("jsonwebtoken");
let JWT_Secrat = "Varun";

function Verification(req, res, next) {
  let authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) res.status(403).json({});

  const token = authHeader.split(" ")[1];

  try {
    let decoded = jwt.verify(token, JWT_Secrat);
    if (!decoded.email) res.send("User not verify");
    next();
  } catch (err) {
    res.status(500).json({});
  }
}

module.exports = Verification;
