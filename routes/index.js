const express = require("express");
const router = express.Router();

const adminController = require("../controllers/Admin.controllers");
const userController = require("../controllers/User.controllers");
const productController = require("../controllers/Product.controllers");
const subscriptionController = require("../controllers/Subscription.controllers");
const subscriptionPlanController = require("../controllers/SubscriptionPlan.controllers");

router.post("/api/admins/register", adminController.createAdmin);

router.post("/api/users/register", userController.createUser);

router.get("/api/products", productController.getProducts);
router.post("/api/products", productController.createProduct);

router.post("/api/subscriptions", subscriptionController.createSubscription);

router.get(
  "/api/subscription-plans",
  subscriptionPlanController.getSubscriptionPlans
);
router.post(
  "/api/subscription-plans",
  subscriptionPlanController.createSubscriptionPlan
);

module.exports = router;
