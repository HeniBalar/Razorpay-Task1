const PaymentDetail = require("../model/order")
const razorpay = require("../Razorpay");

exports.createOrder = (req, res) => {
    var options = {
        amount: 10000,
        currency: "INR",
        receipt: "henibalar@gmail.com",
        // notes:{
        //     "description":"Best course",
        //     "language":"available node"
        // }
    };
    razorpay.orders.create(options)
        .then(async (response) => {
            const paymentDetail = new PaymentDetail({
                // orderId: response.id,
                receiptId: response.receipt,
                amount: response.amount,
                currency: response.currency,
                // notes:response.notes,
                createdAt: response.created_at,
                status: response.status
            })
            try {
                await paymentDetail.save()
                res.json(paymentDetail)
                console.log(paymentDetail)
            } catch (err) {
                if (err) throw err;
            }
        }).catch((err) => {
            if (err) throw err;
        })

}