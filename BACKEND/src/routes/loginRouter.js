const express = require('express');
const router = express.Router();

const { login, getNome, getUser } = require("../controller/loginController");

/**
* @swagger
* /login:
*   post:
*     summary: Fazer login
*     responses:
*        200:
*           description: Faz consulta do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/login', login);

/**
* @swagger
* /home:
*   get:
*     summary: Pegar nome de usuário
*     responses:
*        200:
*           description: Pega o nome do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
 
router.get('/home', getNome);

/**
* @swagger
* /profile:
*   post:
*     summary: Pegar dados do usuário
*     responses:
*        200:
*           description: Pega os dados do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/profile', getUser);


module.exports = router;
