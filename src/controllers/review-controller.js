const httpStatus = require("http-status");

const reviewService = require("../services/review-service");

const ReviewDTO = require("../dto/order/review-dto");

exports.findAllReviews = async (req, res, next) => {
  const results = await reviewService.findAllReviews();

  if (results && results.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: results,
    });
  }

  if (results && results.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "reviewRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/reviews/",
        },
      ],
    });
  }
};

exports.findReviewByOrderId = async (req, res, next) => {
  const orderId = req.params.orderId;
  const review = await reviewService.findReviewByOrderId(orderId);

  if (review && review.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: review,
    });
  }

  if (review && review.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "reviewRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/reviews/",
        },
      ],
    });
  }
};

exports.registReview = async (req, res, next) => {
  const reviewDto = new ReviewDTO(req.body);
  const review = await reviewService.registReview(reviewDto);

  if (review && review.length > 0) {
    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "OK",
      results: review,
    });
  }

  if (review && review.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "reviewRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/reviews/",
        },
      ],
    });
  }
};

exports.updateReview = async (req, res, next) => {
  const reviewId = req.params.reviewId;
  const reviewDto = new ReviewDTO(req.body);
  const review = await reviewService.updateReview(reviewId, reviewDto);

  if (review && review.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: review,
    });
  }

  if (review && review.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "reviewRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/reviews/",
        },
      ],
    });
  }
};

exports.deleteReview = async (req, res, next) => {
  const reviewId = req.params.reviewId;
  const result = await reviewService.deleteReview(reviewId);
  console.log(result);

  if (result) {
    res.status(httpStatus.NO_CONTENT).send({
      status: httpStatus.NO_CONTENT,
      message: "Deleted Review",
      results: [],
    });
  } else {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "reviewRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/reviews/",
        },
      ],
    });
  }
};
