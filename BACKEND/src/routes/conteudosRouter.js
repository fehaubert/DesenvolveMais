const {Router} = require('express');

const router = Router();

const { 
    getMaterias,
    getConteudos,
    getConteudoByNome
} = require("../controller/conteudosController");

router.get('/materias', getMaterias);
router.post('/conteudos', getConteudos);
router.get('/get/conteudo/:nome', getConteudoByNome);

module.exports = router;


