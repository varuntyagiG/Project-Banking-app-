const zod = require("zod");

const Update = zod.object({
  firstname: zod.string().min(3).max(30),
  lastname: zod.string().min(3).max(30),
  password: zod.string(),
});

module.exports = Update;
