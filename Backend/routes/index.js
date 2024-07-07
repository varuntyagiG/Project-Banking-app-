const express = require("express");
const userrouter = require("./user");
const router = express.Router();

router.use("/user", userrouter);

module.exports = router;
