const Subscription = require("../model/Subscription");

const createSubscription = async (subscriptionData) => {
  try {
    console.log(subscriptionData);
    const subscription = new Subscription(subscriptionData);
    await subscription.save();
    return subscription;
  } catch (error) {
    throw new Error("Failed to create subscription");
  }
};

module.exports = {
  createSubscription,
};
