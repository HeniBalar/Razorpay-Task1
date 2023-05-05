const express = require('express');
require("./database/db").connect()
const dotenv=require("dotenv");
const OrderRouter = require("./router/orderRouter");
const UserRouter = require("./router/userRouter");
const app = express();

app.get('/', (req, res) => {
    res.send("hello world!!!!!!!!!")
}),
dotenv.config();
app.use(express.json());

app.use(OrderRouter)
app.use(UserRouter)

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log("Server is Listening on Port ", PORT);
});