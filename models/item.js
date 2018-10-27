const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: { type: String, required: true },
  title: {type:String, required:true},
  user: { type: String, required: true },
  image: {data: Buffer, type: String, required:true},
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
