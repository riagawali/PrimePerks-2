// const SubscriptionPlan = require("../model/SubscriptionPlan");

// const getSubscriptionPlans = async (req, res) => {
//   try {
//     const subscriptionPlans = await SubscriptionPlan.find();
//     res.json(subscriptionPlans);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch subscription plans" });
//   }
// };

// const createSubscriptionPlan = async (req, res) => {
//   try {
//     const { name, description, price, duration } = req.body;
//     const subscriptionPlan = new SubscriptionPlan({
//       name,
//       description,
//       price,
//       duration,
//     });
//     await subscriptionPlan.save();
//     res.json({ message: "Subscription plan created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to create subscription plan" });
//   }
// };

// module.exports = {
//   getSubscriptionPlans,
//   createSubscriptionPlan,
// };

const subscriptionPlanService = require("../services/subscriptionPlanService");

const getSubscriptionPlans = async (req, res) => {
  try {
    const subscriptionPlans =
      await subscriptionPlanService.getSubscriptionPlans();
    res.json(subscriptionPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const createSubscriptionPlan = async (req, res) => {
  try {
    const { name, description, price, duration, products } = req.body;
    const subscriptionPlanData = {
      name,
      description,
      price,
      duration,
      products,
    };
    const subscriptionPlan =
      await subscriptionPlanService.createSubscriptionPlan(
        subscriptionPlanData
      );
    res.json({
      message: "Subscription plan created successfully",
      subscriptionPlan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSubscriptionPlans,
  createSubscriptionPlan,
};
