const express = require("express");
const userrouter = require("./user");
const accountrouter = require("./Account");
const router = express.Router();

router.use("/user", userrouter);
router.use("/accountrouter", accountrouter);

module.exports = router;
