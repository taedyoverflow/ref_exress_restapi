const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const orderRouter = require("./src/routes/order-route");
const reviewRouter = require("./src/routes/review-route");

app.use("/orders", orderRouter);
app.use("/reviews", reviewRouter);

app.listen(3000, () => console.log("Listening on port 3000"));
