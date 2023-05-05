const express = require('express');
const { createOrder } = require('../controller/createOrder');
const { getOrder } = require('../controller/getOrders');
const { getPayment } = require('../controller/getpayment');

const router = express.Router()
router.post('/createOrder', createOrder)
router.get('/orders', getOrder)
router.get("/payments",getPayment)


module.exports = router;