const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/review-controller");

router.get("/", ReviewController.findAllReviews);
router.get("/:orderId", ReviewController.findReviewByOrderId);
router.post("/", ReviewController.registReview);
router.put("/:reviewId", ReviewController.updateReview);
router.delete("/:reviewId", ReviewController.deleteReview);

module.exports = router;
