const zod = require("zod");

const Update = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  email: zod.string().email(),
});

module.exports = Update;
