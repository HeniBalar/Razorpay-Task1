const razorpay = require("../Razorpay")

//=============================all order get==================================
exports.getOrder = (req, res) => {

    razorpay.orders.all({}, function (err, orders) {
        if (err) {
            console.error(err);
        }
        res.json({ message: "succecgc", orders });
        console.log(orders);
    });
}

//============================get by ID (order_ID)============================
// exports.getOrder= (req, res) => {

//   const {orderId} = req.body;

//         razorpay.orders.fetch(orderId)
//         .then(async (response) => {
//             const paymentDetail = new PaymentDetail({
//                 // orderId: response.id,
//                 receiptId: response.receipt,
//                 amount: response.amount,
//                 currency: response.currency,
//                 createdAt: response.created_at,
//                 status: response.status
//             })
//             try {
//                 await paymentDetail.save()
//                 res.json(paymentDetail)
//                 console.log(paymentDetail)
//             } catch (err) {
//                 if (err) throw err;
//             }
//         }).catch((err) => {
//             if (err) throw err;
//         })
// }