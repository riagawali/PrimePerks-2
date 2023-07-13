const Admin = require("../model/Admin");

const createAdmin = async (adminData) => {
  try {
    console.log(adminData);
    const admin = new Admin(adminData);
    await admin.save();
    return admin;
  } catch (error) {
    throw new Error("Failed to create admin");
  }
};

module.exports = {
  createAdmin,
};
