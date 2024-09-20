getMaterias();

async function getMaterias() {
    const response = await fetch('http://localhost:3005/api/materias', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });

    const results = await response.json();

    if (results.success) {
        let materias = results.data;
        let html = document.getElementById("materias");

        materias.forEach(materia => {
            let page = materia.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

            localStorage.setItem(page, materia.id);

            let card = "<section class='ir_para' > " +
                "<p class='titulos'>" + materia.nome + "</p>" +
                "<button class='som-btn'>" +
                "    <span id='som' class='material-symbols-outlined'>" +
                "        volume_up" +
                "    </span>" +
                "</button>" +
                `<a href="../conteudos/${page}.html">` +
                "    <p class='estudar'>Estudar ></p>" +
                "</a>" +
                "</section>";

            html.innerHTML += card;
        });

        adicionarEventosSom();

    } else {
        alert(results.message);
    }
}

function adicionarEventosSom() {
    const botoesSom = document.querySelectorAll('.som-btn');

    botoesSom.forEach(botao => {
        botao.addEventListener('click', function () {
            const titulo = this.closest('.ir_para').querySelector('.titulos').textContent; 
            lerTexto(titulo);
        });
    });
}

function lerTexto(texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(utterance);
}

document.addEventListener("DOMContentLoaded", function () {
    const botaoSomHeader = document.querySelector('header button > span#som');

    if (botaoSomHeader) {
        botaoSomHeader.parentElement.addEventListener('click', function () {
            const header = botaoSomHeader.closest('header');
            if (header) {
                const textoParaLer = header.querySelector('h3').textContent + ' ' + header.querySelector('p').textContent;
                lerTexto(textoParaLer);
            }
        });
    }
});
