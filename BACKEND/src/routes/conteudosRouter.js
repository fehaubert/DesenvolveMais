const {Router} = require('express');

const router = Router();

const { 
    getMaterias,
    getConteudos,
    getConteudoByNome
} = require("../controller/conteudosController");

/**
* @swagger
* /materias:
*   get:
*     summary: Pegar as matérias
*     responses:
*        200:
*           description: Pega o nome das matérias
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.get('/materias', getMaterias);

/**
* @swagger
* /conteudos:
*   post:
*     summary: Pegar o nome dos conteudos
*     responses:
*        200:
*           description: Pega o nome dos conteudos
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/conteudos', getConteudos);

/**
* @swagger
* /get/conteudo/:nome:
*   get:
*     summary: Pegar os conteudo
*     responses:
*        200:
*           description: Pega os conteúdos pelo nome
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.get('/get/conteudo/:nome', getConteudoByNome);

module.exports = router;


