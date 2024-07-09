const express = require("express");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let User = require("../Db/db");
let JWT_Secrat = "Varun";
let UserValidation = require("../Zod/UserValidation");
let Verification = require("../Middlewares/Verify");
const Update = require("../Zod/update");
const router = express.Router();

// signup
router.post("/signup", async (req, res) => {
  try {
    let { firstname, lastname, email, password } = req.body;
    let Validation = UserValidation.safeParse(req.body);
    if (Validation.success === false) {
      return res.send("Wrong Input");
    }

    let find_user = await User.findOne({ email });
    if (find_user) {
      return res.send("user already exists");
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        let Add_user = new User({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: hash,
        });
        await Add_user.save();
      });
    });
    let token = jwt.sign({ email }, JWT_Secrat);
    res.json({
      message: "user created succesfully",
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// sign in
router.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  let detail_info = await User.findOne({ email });
  if (!detail_info) {
    return res.send("User not found");
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

// get all the user from database
router.get("/user", async (req, res) => {
  let all_users = await User.find({}).select("-password");
  console.log(all_users);
  res.json({
    Users: all_users,
  });
});

// update route
router.put("/update", Verification, async (req, res) => {
  let { firstname, lastname, password } = req.body;
  let ValidationForUpdate = Update.safeParse(req.body);
  if (ValidationForUpdate.success === false) {
    return res.send("Not valid info");
  }
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

// seaching user (for searching we use $regex) // regex take a string
router.get("/searching", async (req, res) => {
  const filter = req.query.filter ? String(req.query.filter) : ""; // apply tertiary operator
  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
          $options: "i", // case insensitive
        },
      },
      {
        lastname: {
          $regex: filter,
          $options: "i",
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstname,
      lastName: user.lastname,
      _id: user._id,
    })),
  });
});
//----

module.exports = router;
