const connection = require('../config/db');

async function login(request, response) {
    const email = [request.body.email];
    const query = "SELECT id, name, email, password FROM users WHERE email = ?";

    connection.query(query, email, (err, results) => {
        if (err) {
            console.error(err);
            return response.status(500).json({
                success: false,
                message: "Erro no servidor",
                data: err
            });
        }

        if (results.length > 0) {
            const user = results[0];
            const password = request.body.password;
            const passwordQuery = results[0].password;

            if (password === passwordQuery) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Sucesso",
                        data: {
                            id: user.id,
                            name: results[0].name,
                            email: results[0].email
                        }
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Senha incorreta"
                    });
            }
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Email não encontrado!",
                    data: err
                });
        }
    });
}

async function getNome(request, response) {
    const userId = request.body.cliente_id;
    console.log("ID do cliente recebido:", userId);
 
    if (!userId) {
        return response.status(400).json({
            success: false,
            message: "ID do cliente não fornecido."
        });
    }
 
    const query = "SELECT name FROM users WHERE id = ?";
    connection.query(query, [userId], (err, results) => {
        console.log("Erro ao consultar o nome do cliente:", err);
        console.log("Resultado da consulta do nome do cliente:", results);
 
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Ops! Não deu...",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
 
        if (results.length === 0) {
            return response.status(404).json({
                success: false,
                message: "Cliente não encontrado."
            });
        }
 
        response.status(200).json({
            success: true,
            message: "Sucesso!",
            data: results[0]
        });
    });
}



async function getUser(request, response) {
    const userId = request.body.cliente_id;

    if (!userId) {
        return response.status(400).json({
            success: false,
            message: "ID do cliente não fornecido."
        });
    }

    const query = "SELECT name, email, create_at FROM users WHERE id = ?";
    connection.query(query, [userId], (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar perfil",
                data: err
            });
        }

        if (results.length === 0) {
            return response.status(404).json({
                success: false,
                message: "Usuário não encontrado."
            });
        }

        response.status(200).json({
            success: true,
            message: "Perfil carregado com sucesso!",
            data: results[0]
        });
    });
}

module.exports = {
    login,
    getNome,
    getUser
};
