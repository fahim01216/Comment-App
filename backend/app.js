const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute = require("./routes/userRoute");
const commentRoute = require("./routes/commentRoute");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/comments", commentRoute);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

mongoose.connect("mongodb://localhost:27017/fahimdb").then(() => {
  app.listen(PORT, () => {
    console.log(`Application is listenig on http://localhost:${PORT}`);
  });
});

// npm i