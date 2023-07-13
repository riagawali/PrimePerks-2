const User = require("../model/User");

const createUser = async (userData) => {
  try {
    console.log(userData);
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

module.exports = {
  createUser,
};
