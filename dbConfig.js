const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://devesh:Devesh123@cluster0.fd5f7gd.mongodb.net/");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo Db Connection Successful");
});

db.on("error", () => {
  console.log("Mongo Db Connection Failed");
});
