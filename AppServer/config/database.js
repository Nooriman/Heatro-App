const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://iotikco:I0tikdotco@maincluster.mfwzb2n.mongodb.net/testuser";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(`Connected to database on ${dbURI}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Database connected error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(`Disconnected from database`);
});

module.exports = {
  dbURI,
};
