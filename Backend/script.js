const express = require("express");
const mainrouter = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", mainrouter);

app.listen(8000);
