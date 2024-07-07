const zod = require("zod");

const Update = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

module.exports = Update;
