const connection = require('../config/db')

async function getMaterias(request, response) {
    let query = "select * from materias;";
    
    connection.query(query, (err, results) => {
        console.log(err)
        if(results) {
            response
            .status(200)
            .json({
                success: true,
                message:"Sucesso!",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Matérias não encontradas!"
            })
        }
    })
}

async function getConteudos(request, response) {
    let params = Array(
        request.body.idMateria
    )

    let query = "SELECT * FROM conteudos WHERE materia_id = ?;";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(200)
            .json({
                success: true,
                message:"Sucesso!",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Conteúdos não encontrados!"
            })
        }
    })
}

async function getConteudoByNome(request, response) {
    let { nome } = request.params;

    let query = "SELECT * FROM conteudos WHERE nome = ?;";

    connection.query(query, [nome], (err, results) => {
        if (results.length > 0) {
            response.status(200).json({
                success: true,
                conteudo: results[0]
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Conteúdo não encontrado!"
            });
        }
    });
}

module.exports = {
    getMaterias,
    getConteudos,
    getConteudoByNome
};

