const express = require('express');
const router = express.Router();

const { login, getNome, getUser } = require("../controller/loginController");

router.post('/login', login);
router.get('/home', getNome);
router.post('/profile', getUser);


module.exports = router;
