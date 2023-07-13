// const express = require("express");
// const router = express.Router();

// const AdminController = require("../controllers/Admin.controllers");
// const UserController = require("../controllers/User.controllers");
// const ProductController = require("../controllers/Product.controllers");
// const SubscriptionController = require("../controllers/Subscription.controllers");
// const SubscriptionPlanController = require("../controllers/SubscriptionPlan.controllers");

// router.post("/api/admins/register", AdminController.createAdmin);
// // router.post("/api/admins/login", AdminController.login);

// router.post("/api/users/register", UserController.createUser);
// // router.post("/api/users/login", UserController.login);

// router.get("/api/products", ProductController.getProducts);
// router.post("/api/products", ProductController.createProduct);

// // router.get("/api/subscriptions", SubscriptionController.getSubscriptions);
// router.post("/api/subscriptions", SubscriptionController.createSubscription);

// router.get(
//   "/api/subscription-plans",
//   SubscriptionPlanController.getSubscriptionPlans
// );
// router.post(
//   "/api/subscription-plans",
//   SubscriptionPlanController.createSubscriptionPlan
// );

// module.exports = router;

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
