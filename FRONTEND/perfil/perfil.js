document.addEventListener('DOMContentLoaded', () => {
    // Obtenha o ID do usuário do localStorage
    const userId = localStorage.getItem('userId');

    if (!userId) {
        swal("Erro", "ID do usuário não encontrado no localStorage.", "error");
        return;
    }

    // Faz a requisição para obter os dados do perfil
    fetch('http://localhost:3005/api/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cliente_id: userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector('.informacoes .nome').textContent = data.data.name;
            document.querySelector('.informacoes .email').textContent = data.data.email;
            const createDate = new Date(data.data.create_at);
            const formattedDate = createDate.toLocaleDateString(); // Formata a data no formato DD/MM/YYYY
            document.querySelector('.informacoes .data-criacao').textContent = `Conta criada em ${formattedDate}`;
        } else {
            swal("Erro ao carregar o perfil", data.message, "error");
        }
    })
    .catch(error => {
        swal("Erro ao carregar o perfil", error.message, "error");
    });

    // -----------SAIR------------
    document.getElementById('sair-link').addEventListener('click', function (event) {
        event.preventDefault();
        swal({
            title: "Você tem certeza de que deseja sair?",
            icon: "warning",
            buttons: ["Não!", "Sim, tenho certeza!"],
        }).then((willExit) => {
            if (willExit) {
                // Limpar o localStorage ao sair
                localStorage.removeItem('userId');
                localStorage.removeItem('userName');
                window.location.href = "../login/login.html";
            }
        });
    });

    // -----------DELETAR------------
    document.getElementById('deletar-conta').addEventListener('click', function () {
        swal({
            title: "Você tem certeza?",
            text: "Esta ação não pode ser desfeita.",
            icon: "warning",
            buttons: ["Cancelar", "Sim, deletar"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch('http://localhost:3005/api/deleteConta', {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ cliente_id: userId }) // esse aqui envia o ID do usuário para deletar a conta
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao deletar a conta');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        swal("Conta deletada com sucesso!", {
                            icon: "success",
                        }).then(() => {
                            localStorage.removeItem('userId'); // esse aqui limpa o localStorage ao deletar a conta
                            localStorage.removeItem('userName');
                            window.location.href = "../login/login.html";
                        });
                    } else {
                        swal("Erro ao deletar a conta. Tente novamente.", {
                            icon: "error",
                        });
                    }
                })
                .catch(error => {
                    swal("Erro ao deletar a conta.", {
                        icon: "error",
                        text: error.message,
                    });
                });
            }
        });
    });
});
