const { Router } = require('express');
const router = Router();
const { forgotPassword } = require('../controller/senhaController');

router.post('/forgot-password', forgotPassword);

module.exports = router;
