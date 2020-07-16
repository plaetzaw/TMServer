const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { authUser } = require("./utility/auth");

app.use(require("./routes/login", authUser));
app.use(require("./routes/register"));
app.use(require("./routes/taskFeed", authUser));
app.use(require("./routes/createTask", authUser));
app.use(require("./routes/userTaskFeed"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
