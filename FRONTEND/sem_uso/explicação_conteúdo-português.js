function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
} 

document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");
    const nomeDiv = document.getElementById("nome");
    const page = getParameterByName('content');

    if (page === 'conteudo1') {
        nomeDiv.innerHTML = "<h1>Alfabeto</h1>";
        contentDiv.innerHTML = "<p>O alfabeto português possui 26 letras, divididas em vogais e consoantes.</p><h4>Vogais:</h4><ul><li>A, E, I O, U</li></ul><h4>Consoantes:</h4><ul><li>B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z</li></ul><h4>Exemplos:</h4></h4><ul><li>A de Abelha</li><li>B de Bola</li><li>C de Casa</li></ul>";
    } else if (page === 'conteudo2') {
        nomeDiv.innerHTML = "";
        contentDiv.innerHTML = "";
    } else if (page === 'conteudo3') {
        nomeDiv.innerHTML = "";
        contentDiv.innerHTML = "";
    } else {
        contentDiv.innerHTML = "<h1>Página não encontrada</h1><p>A página solicitada não existe.</p>";
    }
});