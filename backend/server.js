const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const musicrouter = require("./routes/music");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//mongodb connectiona
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/music", musicrouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
