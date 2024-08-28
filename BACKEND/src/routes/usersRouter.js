const { Router } = require('express');
const router = Router();
const { storeUser } = require('../controller/usersController');
const { deleteConta } = require("../controller/usersController");

router.delete('/deleteConta', deleteConta);  
router.post('/user/create', storeUser);

module.exports = router;