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
  let detail = await User.findOne({ email });
  if (!detail) {
    res.send("User not found");
  } else {
    bcrypt.compare(password, detail.password, function (err, result) {
      if (result === true) {
        let token = jwt.sign({ email }, JWT_Secrat);
        res.json({
          token: token,
        });
      }
    });
  }
});

// update route
router.put("/:id", Verification, async (req, res) => {
  let { id } = req.params;
  let { firstname, lastname, password } = req.body;
  let ValidationForUpdate = Update.safeParse(req.body);
  if (ValidationForUpdate.success === false) res.send("Not valid info");
  // -----------password ko hash karna chah rha hu update k time
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      await User.findByIdAndUpdate(
        { _id: id },
        { $set: { firstname: firstname, lastname: lastname, password: hash } },
      );
      res.json({
        message: "Updated Sucessfully",
      });
    });
  });
});

module.exports = router;
