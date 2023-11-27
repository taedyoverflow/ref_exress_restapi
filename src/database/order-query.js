exports.findAllOrders = () => {
  return `
    SELECT * 
        FROM ORDER_TBL
    `;
};

exports.findOrderById = (orderId) => {
  return `
    SELECT * 
        FROM ORDER_TBL
        WHERE id = ${orderId}
    `;
};

exports.registOrder = () => {
  return `
        INSERT INTO ORDER_TBL (
            total_price,
            order_date
        )
        VALUES (?,?)
    `;
};

exports.updateOrder = (orderId) => {
  return `
        UPDATE ORDER_TBL
        SET total_price =?,
            order_date =?
        WHERE id =${orderId}
    `;
};

exports.deleteOrder = (orderId) => {
  return `
        DELETE FROM ORDER_TBL
        WHERE id = ${orderId}
    `;
};
