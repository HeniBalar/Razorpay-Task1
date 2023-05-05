const User = require("../model/user")
const bcrypt = require('bcrypt');

exports.loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            console.log("all input required")
            throw new Error("all input required")
        }

        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token });
            console.log("Login success", user, token)
        } else {
            throw new Error("Invalid Email & Password")
        }

    } catch (error) {
        console.log("err...", error)
        res.status(201).send({ error: error.message })
    }
}