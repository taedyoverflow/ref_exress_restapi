const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order-controller");

router.get("/", OrderController.findAllOrders);
router.get("/:orderId", OrderController.findOrderById);
router.post("/", OrderController.registOrder);
router.put("/:orderId", OrderController.updateOrder);
router.delete("/:orderId", OrderController.deleteOrder);

module.exports = router;
