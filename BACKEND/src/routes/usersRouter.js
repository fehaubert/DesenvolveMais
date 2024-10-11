const { Router } = require('express');
const router = Router();
const { storeUser } = require('../controller/usersController');
const { deleteConta } = require("../controller/usersController");
const { updateUser } = require('../controller/usersController');

router.delete('/deleteConta', deleteConta);  
router.post('/user/create', storeUser);
router.put('/updateUser', updateUser);

module.exports = router;