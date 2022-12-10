const Order = require("../models/order");

const getOrders = async (req, res) => {


  try {
    const order = await Order.find()
    .populate('userid', 'fullName')
    .populate('order', ['name', 'img', 'price']);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
  };



  module.exports = {
    getOrders,
  };
  