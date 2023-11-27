const httpStatus = require("http-status");

const orderService = require("../services/order-service");

const OrderDTO = require("../dto/order/order-dto");

exports.findAllOrders = async (req, res, next) => {
  const results = await orderService.findAllOrders();

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
          rel: "orderRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/order/",
        },
      ],
    });
  }
};

exports.findOrderById = async (req, res, next) => {
  const orderId = req.params.orderId;
  const order = await orderService.findOrderById(orderId);

  if (order && order.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: order,
    });
  }

  if (order && order.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "orderRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/order/",
        },
      ],
    });
  }
};

exports.registOrder = async (req, res, next) => {
  const orderDTO = new OrderDTO(req.body);
  const order = await orderService.registOrder(orderDTO);

  if (order && order.length > 0) {
    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "OK",
      results: order,
    });
  }

  if (order && order.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "orderRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/order/",
        },
      ],
    });
  }
};

exports.updateOrder = async (req, res, next) => {
  const orderId = req.params.orderId;
  const orderDTO = new OrderDTO(req.body);
  const order = await orderService.updateOrder(orderId, orderDTO);

  if (order && order.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: order,
    });
  }

  if (order && order.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "orderRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/order/",
        },
      ],
    });
  }
};

exports.deleteOrder = async (req, res, next) => {
  const orderId = req.params.orderId;
  const result = await orderService.deleteOrder(orderId);
  console.log(result);

  if (result) {
    res.status(httpStatus.NO_CONTENT).send({
      status: httpStatus.NO_CONTENT,
      message: "Deleted Order",
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
          rel: "orderRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/order/",
        },
      ],
    });
  }
};
