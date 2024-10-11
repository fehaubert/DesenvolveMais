getConteudos();

async function getConteudos() {
    let idMateria = localStorage.getItem('portugues');

    let data = { idMateria };

    const response = await fetch('http://localhost:3005/api/conteudos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results.data)
        let conteudos = results.data;
        let html = document.getElementById("conteudos");

        conteudos.forEach((conteudos, index) => {
            let page = conteudos.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

            let card = `<section class='ir_para portugues'> 
                <p id='conteudo-${index}' class='titulos'>${conteudos.nome}</p>
                <button class="botao_som" data-text="conteudo-${index}">
                    <span id='som' class='material-symbols-outlined'>volume_up</span>
                </button>
                <a href="../detalhes_conteudo/detalhes_conteudo.html?content=${page}">
                    <p class='estudar'>Estudar ></p>
                </a>
            </section>`;

            html.innerHTML += card;
        });

        document.querySelectorAll('.botao_som').forEach(button => {
            button.addEventListener('click', function() {
                let textElementId = this.getAttribute('data-text');
                let textToRead = document.getElementById(textElementId).innerText;
                speakText(textToRead);
            });
        });
    } else {
        alert(results.message);
    }
}

document.querySelector('.botao_som').addEventListener('click', function() {
    let headerText = document.querySelector('header p').innerText;
    speakText(headerText);
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
}
