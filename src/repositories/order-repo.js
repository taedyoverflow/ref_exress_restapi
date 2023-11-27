const orderQuery = require("../database/order-query");

exports.findAllOrders = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.findAllOrders(), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.findOrderById = (connection, orderId) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.findOrderById(orderId), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.registNewOrder = (connection, newOrder) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.registOrder(), [newOrder.totalPrice, newOrder.orderDate], (err, result) => {
      if (err) {
        reject(err);
      }
      console.log("repo result : ", result);
      resolve(result);
    });
  });
};

exports.updateOrder = (connection, orderId, updateOrder) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.updateOrder(orderId), [updateOrder.totalPrice, updateOrder.orderDate], (err, result) => {
      if (err) {
        reject(err);
      }
      console.log("repo result : ", result);
      resolve(result);
    });
  });
};

exports.deleteOrder = (connection, orderId) => {
  return new Promise((resolve, reject) => {
    connection.query(orderQuery.deleteOrder(orderId), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
