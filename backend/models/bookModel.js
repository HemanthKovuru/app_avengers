const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
    enum: ["Paperbook", "Other Merchandize"],
  },
  author: {
    type: String,
  },
  publisher: {
    type: String,
  },
  released: {
    type: Date,
  },
  edition: {
    type: String,
    default: "Internatinal Edition",
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  offer: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
