document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nomeConteudo = urlParams.get('content');
    console.log("Parâmetro content:", nomeConteudo);

    if (nomeConteudo) {
        fetch(`http://localhost:3005/api/get/conteudo/${nomeConteudo}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const conteudosContainer = document.getElementById("conteudos");

                    conteudosContainer.innerHTML =
                        `<h2 class="titulo">${data.conteudo.nome}</h2>` +
                        `<button id="botao_som">
                            <span id="som" class="material-symbols-outlined">
                                volume_up
                            </span>
                         </button>` +
                        `<p class="conteudo1" id="texto">${data.conteudo.conteudo1}</p>` +
                        `<p class="conteudo2" id="texto">${data.conteudo.conteudo2}</p>` +
                        `<br>` +
                        `<h4> Exemplo: </h4>` +
                        `<p class="exemplo" id="texto">${data.conteudo.exemplo}</p>` +
                        `<a href="../materias/materias.html">
                            <button id="voltar"> Voltar </button>
                        </a>`;

                    const botaoSom = document.getElementById('botao_som');
                    botaoSom.addEventListener('click', function () {
                        lerTextoEmVozAlta(data.conteudo.conteudo1);
                        lerTextoEmVozAlta(data.conteudo.conteudo2);
                        lerTextoEmVozAlta(data.conteudo.exemplo);
                    });
                } else {
                    alert("Conteúdo não encontrado!");
                }
            })
            .catch(error => {
                console.error("Erro ao buscar o conteúdo:", error);
                alert("Ocorreu um erro ao carregar o conteúdo.");
            });
    } else {
        alert("Nenhum conteúdo selecionado!");
    }
});

function lerTextoEmVozAlta(texto) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);

    utterance.lang = 'pt-BR';
    utterance.pitch = 1;
    utterance.rate = 1;

    synth.speak(utterance);
}