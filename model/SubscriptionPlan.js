// const mongoose = require("mongoose");
// const subscriptionPlanSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   duration: {
//     type: String,
//   },
// });
// const SubscriptionPlan = mongoose.model(
//   "SubscriptionPlan",
//   subscriptionPlanSchema
// );
// module.exports = SubscriptionPlan;

const mongoose = require("mongoose");

const subscriptionPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const SubscriptionPlan = mongoose.model(
  "SubscriptionPlan",
  subscriptionPlanSchema
);
module.exports = SubscriptionPlan;
