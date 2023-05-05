const User = require("../model/user")
const validator = require("validator");
const bcrypt = require('bcrypt');

exports.usercreate = async (req, res) => {

    try {
        const { name, email, password, membership } = req.body;

        if (!(name && email && password && membership)) {
            console.log("data required")
            throw new Error("all field required");
        }

        if (!name.trim()) {
            throw new Error("space is not required.fill up name.")
        } else if (!/^[a-zA-Z]*$/.test(name)) {
            throw new Error("name is not valid")
        } else if (!validator.isLength(name, { min: 3, max: 30 })) {
            throw new Error("validation min length 3 and max lendth 30")
        }

        if (!email.trim()) {
            throw new Error("space is not required.fill up email.")
        } else if (!/^[a-z0-9]+(([._-]?[a-z0-9]+)+)?@[a-z]{2,5}.[[a-z]{2,5}]*$/.test(email)) {
            throw new Error("email is a not valid.......")
        }

        const olduser = await User.findOne({ email });
        // console.log(".....", olduser)
        if (olduser) {
            throw new Error("Email already exist.")
        }
        encrytedPassword = await bcrypt.hash(password, 8)

        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: encrytedPassword,
            membership,
        });
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
        console.log("Succesfully created user", user, token)
    }
    catch (error) {
        res.status(400).send({ message: error.message })
        console.log("Error....", error)
    }
}