document.addEventListener("DOMContentLoaded", function() {
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
                        `<p class="conteudo">${data.conteudo.conteudo}</p>` +
                        `<a href="../materias/materias.html">
                            <button id="voltar"> Voltar </button>
                        </a>`;
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
