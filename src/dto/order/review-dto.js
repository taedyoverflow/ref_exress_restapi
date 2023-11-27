class ReviewDTO {
  starRate;
  description;
  image;
  orderId;

  constructor(data) {
    this.starRate = data.starRate;
    this.description = data.description;
    this.image = data.image;
    this.orderId = data.orderId;
  }
}

module.exports = ReviewDTO;
