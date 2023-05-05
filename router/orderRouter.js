const express = require('express');
const { createOrder } = require('../controller/createOrder');
const { getOrder } = require('../controller/getOrders');
const { getPayments } = require('../controller/getPayments');


const router = express.Router()
router.post('/createOrder', createOrder)
router.get('/orders', getOrder)
router.get("/payments", getPayments)


module.exports = router;