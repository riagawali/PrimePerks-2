const subscriptionService = require("../services/subscriptionService");

const createSubscription = async (req, res) => {
  try {
    const { userId, planId } = req.body;
    const subscriptionData = { userId, planId };
    const subscription = await subscriptionService.createSubscription(
      subscriptionData
    );
    res.json({ message: "Subscription created successfully", subscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSubscription,
};
