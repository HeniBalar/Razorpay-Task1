const mongoose = require("mongoose");

exports.connect = () => {
    mongoose.connect("mongodb://localhost:27017/rasorpaytestDB", {
        useNewUrlParser: true,
    }).then(() => {
        console.log("database connection successfully..!!")
    }).catch((error) => {
        console.log("database connection faild. Exesting now...");
        console.log(error)
    });
};