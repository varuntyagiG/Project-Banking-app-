const express = require("express");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let User = require("../Db/db");
let JWT_Secrat = "Varun";
let UserValidation = require("../Zod/zod");
let Verification = require("../Middlewares/Verify");
const Update = require("../Zod/update");
const router = express.Router();

// signup
router.post("/signup", (req, res) => {
  let { firstname, lastname, email, password } = req.body;
  let Validation = UserValidation.safeParse(req.body);
  if (Validation.success === false) res.send("Wrong input");

  const user = User.findOne({ email });
  if (user._id) res.status(411).json("User Aready exists");

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      let UserData = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hash,
      });
      UserData.save();
    });
  });
  let token = jwt.sign({ email }, JWT_Secrat);
  res.json({
    message: "user created successfully",
    token: token,
  });
});

// sign in
router.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  let detail_info = await User.findOne({ email });
  if (!detail_info) {
    res.send("User not found");
  } else {
    bcrypt.compare(password, detail_info.password, function (err, result) {
      if (result === true) {
        let token = jwt.sign({ email }, JWT_Secrat);
        res.json({
          token: token,
        });
      } else {
        res.json("Incorrect password");
      }
    });
  }
});

// update route
router.put("/update", Verification, async (req, res) => {
  let { firstname, lastname, password } = req.body;
  console.log(req.body);
  let ValidationForUpdate = Update.safeParse(req.body);
  if (ValidationForUpdate.success === false) res.send("Not valid info");
  // -- Use bcrypt to hash the password
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      await User.findByIdAndUpdate(
        { _id: req.id }, // get from req object
        { firstname: firstname, lastname: lastname, password: hash },
        { new: true },
      );
      res.json({
        message: "Updated Sucessfully",
      });
    });
  });
});

router.get("/", Verification, (req, res) => {
  res.json("hey");
});

module.exports = router;
