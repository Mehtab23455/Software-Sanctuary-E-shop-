const express = require("express");

const ordersController = require('../controllers/orders.controller');


const router = express.Router();

router.get('/', cartController.getCart);

router.post('/', ordersController.addOrder);

router.get('/', ordersController.getOrders); //orders

module.exports = router;


