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
