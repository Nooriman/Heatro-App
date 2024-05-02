const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressConfig = require("./config/express.js");
const databaseConfig = require("./config/database.js");

app.use(expressConfig);

mongoose.connect(databaseConfig.dbURI, {
  useNeUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
