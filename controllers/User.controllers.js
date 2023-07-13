// const User = require("../model/User");

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch users" });
//   }
// };

// const createUser = async (req, res) => {
//   try {
//     const { email, name, password, phoneNumber } = req.body;
//     const user = new User({ email, name, password, phoneNumber });
//     await user.save();
//     res.json({ message: "User created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to create user" });
//   }
// };

// module.exports = {
//   getUsers,
//   createUser,
// };

const userService = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const { email, name, password, phoneNumber } = req.body;
    const userData = { email, name, password, phoneNumber };
    const user = await userService.createUser(userData);
    res.json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
