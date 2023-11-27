const getConnection = require("../database/connection");
const ReviewRepository = require("../repositories/review-repo");

exports.findAllReviews = () => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();

    const results = await ReviewRepository.findAllReviews(connection);
    connection.end();
    resolve(results);
  });
};

exports.findReviewByOrderId = (orderId) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();

    const results = await ReviewRepository.findReviewByOrderId(connection, orderId);
    connection.end();
    resolve(results);
  });
};

exports.registReview = (newreview) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await ReviewRepository.registNewReview(connection, newreview);

      const insertedreview = await ReviewRepository.findReviewById(connection, result.insertId);
      resolve(insertedreview);
      connection.commit();
      console.log("commit successfully");
    } catch (error) {
      connection.rollback();
      console.log("rollback successfully");
      reject(error);
    } finally {
      connection.end();
      console.log("connection is closed successfully");
    }
  });
};

exports.updateReview = (reviewId, updatereview) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await ReviewRepository.updateReview(connection, reviewId, updatereview);
      if (result.changedRows > 0) {
        const insertedreview = await ReviewRepository.findReviewById(connection, reviewId);
        resolve(insertedreview);
        connection.commit();
        console.log("commit successfully");
      } else {
        resolve(null);
        connection.rollback();
        console.log("변경된 데이터가 존재하지 않습니다.");
      }
    } catch (error) {
      connection.rollback();
      console.log("rollback successfully");
      reject(error);
    } finally {
      connection.end();
      console.log("connection is closed successfully");
    }
  });
};

exports.deleteReview = (reviewId) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();
    connection.beginTransaction();

    try {
      const result = await ReviewRepository.deleteReview(connection, reviewId);
      if (result.affectedRows > 0) {
        resolve(true);
        connection.commit();
        console.log("commit successfully");
      } else {
        resolve(false);
        connection.rollback();
        console.log("삭제할 데이터가 존재하지 않습니다.");
      }
    } catch (error) {
      connection.rollback();
      console.log("rollback successfully");
      reject(error);
    } finally {
      connection.end();
      console.log("connection is closed successfully");
    }
  });
};
