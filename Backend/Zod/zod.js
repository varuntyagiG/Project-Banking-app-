const zod = require("zod");

const UserValidation = zod.object({
  firstname: zod.string().min(3).max(30),
  lastname: zod.string().min(3).max(30),
  email: zod.string().email(),
  password: zod.string(),
});

module.exports = UserValidation;
