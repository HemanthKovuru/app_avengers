const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your firstname."],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Please provide your lastname."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email."],
      unique: true,
      loadClass: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      minlength: 8,
      required: [true, "Please provide a password"],
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "Please provide a confirmPassword"],
      minlength: 8,
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Passowrd does not match.",
      },
    },
  },
  {
    timestamps: true,
  }
);

// document middleware
// hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;

  next();
});

// methods
userSchema.methods.checkPassword = async function (inputPass, dbPass) {
  console.log(inputPass, dbPass);
  return await bcrypt.compare(inputPass, dbPass);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
