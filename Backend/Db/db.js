const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect(
    "mongodb+srv://Varun_Tyagi:varuntyagi@cluster0.eiochyn.mongodb.net/balance",
  )
  .then(() => console.log("Database-Connected!"));

// user schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

// acount schema -- we add two thing one is userId and other is Balance of your
const acountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", acountSchema);

module.exports = {
  User,
  Account,
};
