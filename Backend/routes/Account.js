const express = require("express");
const Verification = require("../Middlewares/Verify");
const { Account } = require("../Db/db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

// Balance Check
router.get("/hey", Verification, async (req, res) => {
  let account = await Account.findOne({
    userId: req.id,
  });
  res.json({
    balance: account.balance,
  });
});

// transfer money
router.post("/transfer", Verification, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;
  console.log(req.body);
  let my_account = await Account.findOne({
    userId: req.id,
  }).session(session);

  if (my_account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json("Insufficient amount");
  }

  const toaccount = await Account.findOne({
    userId: to,
  }).session(session);

  if (!toaccount) {
    await session.abortTransaction();
    return res.status(400).json("Account not found");
  }

  await Account.updateOne(
    {
      userId: req.id,
    },
    {
      $inc: {
        balance: -amount,
      },
    },
  ).session(session);

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    },
  ).session(session);

  await session.commitTransaction();
  res.json({
    message: "transfer Sucessfully",
  });
});

module.exports = router;
