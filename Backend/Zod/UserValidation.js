const zod = require("zod");

// sign up
const UserValidation = zod.object({
  firstname: zod.string().min(3).max(30),
  lastname: zod.string().min(3).max(30),
  email: zod.string().email(),
  password: zod.string().min(6).max(30),
});

module.exports = UserValidation;
