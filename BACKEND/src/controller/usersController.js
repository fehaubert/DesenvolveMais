const connection = require('../config/db');

async function storeUser(request, response) {
    // recuperar dados do form
    const params = Array(
        request.body.name,
        request.body.email,
        request.body.password
    );
    // comando no banco
    const query = "INSERT INTO users(name, email, password) VALUES(?,?,?)";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso!",
                    data: err
                })
        }
    })
}

async function deleteConta(request, response) {
    const userId = request.body.cliente_id;

    console.log("userId na sessão:", userId);

    if (!userId) {
        return response.status(401).json({
            success: false,
            message: "Usuário não autenticado."
        });
    }

    const query = "DELETE FROM users WHERE id = ?;";

    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error("Erro ao deletar a conta:", err);
            return response.status(500).json({
                success: false,
                message: "Erro ao deletar a conta."
            });
        }

        if (results.affectedRows > 0) {
            return response.status(200).json({
                success: true,
                message: "Conta deletada com sucesso!"
            });
        } else {
            return response.status(404).json({
                success: false,
                message: "Conta não encontrada."
            });
        }
    });
}

module.exports = {
    storeUser,
    deleteConta
};