const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

// 1.] generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// 2.] create and send token
const sendToken = (user, statusCode, res) => {
  const token = generateToken(user._id);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// 3.] signup
exports.signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password, confirmPassword } = req.body;

    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    });

    // send response and token
    sendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// 4.signin
exports.signin = async (req, res, next) => {
  try {
    // 1.] check if there is email and password
    const { email, password } = req.body;
    if (!password || !email) {
      throw new Error("Please provide email and password");
    }

    // 2.] check if user exists with provided email
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.checkPassword(password, user.password))) {
      throw new Error("Incorrect email or password");
    }

    // 3.] send token
    sendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
