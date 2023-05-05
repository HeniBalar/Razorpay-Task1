const razorpay = require("../Razorpay")

const today = new Date().toISOString().slice(0, 10);
const last7Days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
const last30Days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

//===================filter using==============================
exports.getPayment = (req, res) => {

    const filters = {
        from: '2023-05-02', // Start date for payments
        to: '2023-05-04', // End date for payments
        // from: today, // Start date for payments (last 7 days)
        // to: today, // End date for payments (today)
        // count: 10, // Maximum number of payments to retrieve
        // skip: 1, // Number of payments to skip (for pagination)
    };
    razorpay.payments.all(filters, function (err, payments) {
        if (err) {
            console.error(err);
        }
        res.json({ message: "payment get succussfully", payments });
        console.log(payments);
    });
}