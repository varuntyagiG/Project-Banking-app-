const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://127.0.0.1:27017/Balance")
  .then(() => console.log("Database-Connected!"));

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
