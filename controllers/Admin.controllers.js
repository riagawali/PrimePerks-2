const adminService = require("../services/adminService");

const createAdmin = async (req, res) => {
  try {
    const adminData = req.body;

    const admin = await adminService.createAdmin(adminData);
    res.json({ message: "Admin created successfully", admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAdmin,
};
