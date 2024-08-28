const connection = require('../config/db');
const crypto = require('crypto');

async function forgotPassword(request, response) {
    const email = request.body.email;

    const query = "SELECT email FROM users WHERE email = ?";
    connection.query(query, [email], (err, results) => {
        if (err || results.length === 0) {
            return response.status(400).json({
                success: false,
                message: "Email não encontrado!",
            });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        // Aqui você pode armazenar o token no banco e enviar o email com o link de recuperação
        // Exemplo: https://seusite.com/reset-password?token=${resetToken}

        // Simulação de envio de e-mail
        console.log(`Link de recuperação: https://seusite.com/reset-password?token=${resetToken}`);

        return response.status(200).json({
            success: true,
            message: "Um link de recuperação foi enviado para o seu e-mail.",
        });
    });
}

module.exports = {
    forgotPassword
};
