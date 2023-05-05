const express = require('express');

const { updateUser } = require('../controller/updateUser');
const { loginuser } = require('../controller/loginUser');
const { usercreate } = require('../controller/usercreate');

const router = express.Router()

//=======================User===============
router.post("/usercreate", usercreate)
router.patch("/updateuser/:id", updateUser)
router.get("/loginuser", loginuser)




module.exports = router;