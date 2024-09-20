document.addEventListener("DOMContentLoaded", function () {
    const userNameElement = document.getElementById('user-name');

    const userName = localStorage.getItem('userName');

    if (userName && userNameElement) {
        userNameElement.textContent = userName;
    }
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
