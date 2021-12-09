const Book = require("./../models/BookModel");

// get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// get book
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// create book
exports.createBook = async (req, res) => {
  try {
    const {
      title,
      type,
      author,
      publisher,
      released,
      edition,
      description,
      price,
      offer,
      imageUrl,
    } = req.body;
    const book = await Book.create({
      title,
      type,
      author,
      publisher,
      released,
      edition,
      description,
      price,
      offer,
      imageUrl,
    });

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.updateBook = (req, res) => {};
exports.deleteBook = (req, res) => {};
