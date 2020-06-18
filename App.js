const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/taskFeed"));
app.use(require("./routes/createTask"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
