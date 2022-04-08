const User = require("../models/User");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).send("Invalid username or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).send("Invalid username or password");
  }
  req.session.isAuth = true;
  return res.status(200).send("Logged in.");
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await User.findOne({ username, email });
  if (user) {
    return res.status(409).send("User already exist.");
  }

  const salt = await bcrypt.genSaltSync(12);
  const hashedPwd = await bcrypt.hashSync(password, salt);

  user = new User({
    username,
    email,
    password: hashedPwd,
  });

  await user.save();

  return res.status(200).send("Registered.");
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.status(200).send("Logged out.");
  });
};

module.exports = {
  login,
  register,
  logout,
};
