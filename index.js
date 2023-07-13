const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase?directConnection=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });

app.use(express.json());

app.use("/", routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
