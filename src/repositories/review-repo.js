const reviewQuery = require("../database/review-query");

exports.findAllReviews = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query(reviewQuery.findAllReviews(), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.findReviewById = (connection, reviewId) => {
  return new Promise((resolve, reject) => {
    connection.query(reviewQuery.findReviewById(reviewId), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.findReviewByOrderId = (connection, orderId) => {
  return new Promise((resolve, reject) => {
    connection.query(reviewQuery.findReviewByOrderId(orderId), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.registNewReview = (connection, newReview) => {
  return new Promise((resolve, reject) => {
    connection.query(reviewQuery.registReview(), [newReview.starRate, newReview.description, newReview.image, newReview.orderId], (err, result) => {
      if (err) {
        reject(err);
      }
      console.log("repo result : ", result);
      resolve(result);
    });
  });
};

exports.updateReview = (connection, reviewId, updateReview) => {
  return new Promise((resolve, reject) => {
    connection.query(reviewQuery.updateReview(reviewId), [updateReview.starRate, updateReview.description, updateReview.image], (err, result) => {
      if (err) {
        reject(err);
      }
      console.log("repo result : ", result);
      resolve(result);
    });
  });
};

exports.deleteReview = (connection, reviewId) => {
  return new Promise((resolve, reject) => {
    connection.query(reviewQuery.deleteReview(reviewId), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
