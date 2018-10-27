const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const itemSeed = [
  {
    itemName: "Home",
    title: "Home",
    user: "user",
    image:
      "TDB",
    date: new Date(Date.now())
  },
  {
    itemName: "Address",
    title: "Address",
    user: "user",
    image:
      "TDB",
    date: new Date(Date.now())
  },
  {
    itemName: "Pet",
    title: "Dog",
    user: "user",
    image:
      "TDB",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
