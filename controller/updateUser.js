const User = require("../model/user");

exports.updateUser = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update User with id=${id}. User was not found!`
                });
            } else res.send({ message: "UserProfile updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
}
