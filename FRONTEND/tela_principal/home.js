// -------------NOME-------------------
document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
        swal("Erro", "ID do usuário não encontrado no localStorage.", "error");
        return;
    }

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
                document.getElementById('user-name').textContent = data.data.name;
                nome = data.data.name;
            } else {
                swal("Erro ao carregar o nome", data.message, "error");
            }
        })
        .catch(error => {
            swal("Erro ao carregar o nome", error.message, "error");
        });
});

// -------------LEITOR-------------------

document.addEventListener("DOMContentLoaded", function () {
    const userNameElement = document.getElementById('user-name');
    const userName = localStorage.getItem('userName');

    if (userName && userNameElement) {
        userNameElement.textContent = userName;
    }

    function lerTexto(texto) {
        const utterance = new SpeechSynthesisUtterance(texto);
        speechSynthesis.speak(utterance);
    }

    const botoesSom = document.querySelectorAll('button > span#som');

    botoesSom.forEach(botao => {
        botao.parentElement.addEventListener('click', function () {
            const parentSection = botao.closest('section');
            let textoParaLer = '';

            if (parentSection) {
                if (parentSection.classList.contains('acompanhamento-de-progresso')) {
                    textoParaLer = parentSection.querySelector('p').textContent;
                } else if (parentSection.classList.contains('ir_para')) {
                    textoParaLer = parentSection.querySelector('.titulos').textContent;
                }
            } else {
                const header = botao.closest('header');
                if (header) {
                    textoParaLer = header.querySelector('h3').textContent + ' ' + header.querySelector('p').textContent;
                }
            }

            if (textoParaLer) {
                lerTexto(textoParaLer);
            }
        });
    });
});
