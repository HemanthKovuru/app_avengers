const fs = require("fs");
console.log(process.argv[2]);

const routeName = process.argv[2] + "Route.js";
const modelName = process.argv[2] + "Model.js";
const controllerName = process.argv[2] + "Controller.js";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// route write
fs.writeFile(
  `./../routes/${routeName}`,
  `
const express = require("express");
const router = express.Router();

const ${process.argv[2]}Controller = require("./../controllers/${process.argv[2]}Controller");

module.exports = router;

`,
  (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  }
);

// model write
fs.writeFile(
  `./../models/${modelName}`,
  `
const mongoose = require("mongoose");

const ${process.argv[2]}Schema = new mongoose.Schema({
    example: {
        type: String,
    }
});
const ${capitalizeFirstLetter(
    process.argv[2]
  )} = mongoose.model("${capitalizeFirstLetter(process.argv[2])}", ${
    process.argv[2]
  }Schema);

module.exports = ${capitalizeFirstLetter(process.argv[2])};
`,
  (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  }
);

// controller write
fs.writeFile(
  `./../controllers/${controllerName}`,
  `
const ${capitalizeFirstLetter(
    process.argv[2]
  )} = require("./../models/${capitalizeFirstLetter(
    process.argv[2] + "Model"
  )}");

exports.getAll${capitalizeFirstLetter(process.argv[2])}s = (req, res) => {
    
}
exports.get${capitalizeFirstLetter(process.argv[2])} = (req, res) => {

}
exports.create${capitalizeFirstLetter(process.argv[2])} = (req, res) => {

}
exports.update${capitalizeFirstLetter(process.argv[2])} = (req, res) => {

}
exports.delete${capitalizeFirstLetter(process.argv[2])} = (req, res) => {

}

`,
  (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  }
);
