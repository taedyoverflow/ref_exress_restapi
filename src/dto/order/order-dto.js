class OrderDTO {
  totalPrice;
  orderDate;

  constructor(data) {
    this.totalPrice = data.totalPrice;
    this.orderDate = new Date(data.orderDate);
  }
}

module.exports = OrderDTO;
