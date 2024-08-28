document.getElementById('esqueceuSenhaForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    const data = { email };

    try {
        const response = await fetch('http://localhost:3005/api/forgot-password', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            swal({
                title: "Sucesso",
                text: "Um link de recuperação foi enviado para o seu e-mail.",
                icon: "success",
            });
        } else {
            swal({
                title: "Erro",
                text: result.message,
                icon: "error",
            });
        }
    } catch (error) {
        swal({
            title: "Erro",
            text: "Ocorreu um erro ao tentar recuperar a senha. Tente novamente mais tarde.",
            icon: "error",
        });
    }
});
