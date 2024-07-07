const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://127.0.0.1:27017/Balance")
  .then(() => console.log("Database-Connected!"));

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
