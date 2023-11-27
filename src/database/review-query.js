exports.findAllReviews = () => {
  return `
    SELECT * 
        FROM REVIEW_TBL`;
};

exports.findReviewById = (reviewId) => {
  return `
    SELECT * 
        FROM REVIEW_TBL 
        WHERE id = ${reviewId}`;
};

exports.findReviewByOrderId = (orderId) => {
  return `
    SELECT * 
        FROM REVIEW_TBL 
        WHERE order_id = ${orderId}`;
};

exports.registReview = () => {
  return `
    INSERT INTO REVIEW_TBL (starRate, description, image, orderId) 
        VALUES (?,?,?,?)`;
};

exports.updateReview = (reviewId) => {
  return `
    UPDATE REVIEW_TBL 
        SET starRate =?, 
            description =?, 
            image =? 
        WHERE id =${reviewId}`;
};

exports.deleteReview = (reviewId) => {
  return `
    DELETE FROM REVIEW_TBL 
        WHERE id =${reviewId}`;
};
