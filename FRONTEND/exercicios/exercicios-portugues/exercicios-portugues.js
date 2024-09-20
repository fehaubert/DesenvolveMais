document.addEventListener("DOMContentLoaded", function () {
    function lerTexto(texto) {
        const utterance = new SpeechSynthesisUtterance(texto);
        speechSynthesis.speak(utterance);
    }

    const botaoSomHeader = document.querySelector('header .botao_som > span.material-symbols-outlined');

    if (botaoSomHeader) {
        botaoSomHeader.parentElement.addEventListener('click', function () {
            const header = botaoSomHeader.closest('header');
            if (header) {
                const textoParaLer = header.querySelector('h3').textContent + ' ' + header.querySelector('p').textContent;
                lerTexto(textoParaLer);
            }
        });
    }

    const botoesSomSecao = document.querySelectorAll('main .ir_para > button > span.material-symbols-outlined');

    botoesSomSecao.forEach(botaoSom => {
        botaoSom.parentElement.addEventListener('click', function () {
            const secao = botaoSom.closest('.ir_para');
            if (secao) {
                const titulo = secao.querySelector('.titulos').textContent;
                lerTexto(titulo);
            }
        });
    });
});
