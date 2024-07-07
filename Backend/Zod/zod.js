const zod = require("zod");

const UserValidation = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});

module.exports = UserValidation;
