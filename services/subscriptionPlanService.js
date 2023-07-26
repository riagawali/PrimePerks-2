const SubscriptionPlan = require("../model/SubscriptionPlan");

const getSubscriptionPlans = async () => {
  try {
    const subscriptionPlans = await SubscriptionPlan.find().populate(
      'products'
    );
    return subscriptionPlans;
  } catch (error) {
    throw new Error("Failed to fetch subscription plans");
  }
};

const createSubscriptionPlan = async (subscriptionPlanData) => {
  try {
    console.log(subscriptionPlanData);
    const subscriptionPlan = new SubscriptionPlan(subscriptionPlanData);
    await subscriptionPlan.save();
    return subscriptionPlan;
  } catch (error) {
    throw new Error("Failed to create subscription plan");
  }
};

module.exports = {
  getSubscriptionPlans,
  createSubscriptionPlan,
};
