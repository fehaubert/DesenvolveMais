const phrases = [
    ["Eu", "bebo", "água."],
    ["O", "gato", "dorme."],
    ["Ela", "estuda", "muito."],
    ["Nós", "corremos", "juntos."],
    ["O", "cachorro", "late."]
];

let selectedPhrase = [];
let currentPhrase = [];
let currentPhraseIndex = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayWords(words) {
    const wordsContainer = document.getElementById('words');
    wordsContainer.innerHTML = '';
    words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.textContent = word;
        wordElement.className = 'word';
        wordElement.onclick = () => selectWord(word);
        wordsContainer.appendChild(wordElement);
    });
}

function selectWord(word) {
    currentPhrase.push(word);
    const phraseContainer = document.getElementById('phrase');
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    wordElement.className = 'word';
    phraseContainer.appendChild(wordElement);

    checkPhrase();
}

function checkPhrase() {
    const feedback = document.getElementById('feedback');
    const botaoRefazer = document.getElementById('botaoRefazer');
    const mensagemFinal = document.getElementById('mensagemFinal');
    const areaDeJogo = document.querySelector('.area-de-jogo');
    const wordsContainer = document.getElementById('words');
    const phraseContainer = document.getElementById('phrase');
    const instrucao = document.querySelector('.instrucao');

    if (currentPhrase.length === selectedPhrase.length) {
        if (currentPhrase.join(' ') === selectedPhrase.join(' ')) {
            feedback.textContent = "Parabéns! Você formou a frase correta!";
            feedback.style.color = "green";

            currentPhraseIndex++;
            if (currentPhraseIndex < phrases.length) {
                resetGame();
            } else {
                instrucao.style.display = 'none';
                wordsContainer.style.display = 'none';
                phraseContainer.style.display = 'none';
                feedback.style.display = 'none';
                botaoRefazer.style.display = 'none';

                mensagemFinal.style.display = 'flex';
            }
        } else {
            feedback.textContent = "Ops! Tente novamente.";
            feedback.style.color = "red";
            botaoRefazer.style.display = 'block';
        }
    }
}

function resetGame() {
    const feedback = document.getElementById('feedback');
    const phraseContainer = document.getElementById('phrase');
    const botaoRefazer = document.getElementById('botaoRefazer');

    feedback.textContent = '';
    phraseContainer.innerHTML = '';
    botaoRefazer.style.display = 'none';

    selectedPhrase = phrases[currentPhraseIndex];
    currentPhrase = [];
    displayWords(shuffle([...selectedPhrase]));
}

function retryPhrase() {
    const phraseContainer = document.getElementById('phrase');
    const feedback = document.getElementById('feedback');
    const botaoRefazer = document.getElementById('botaoRefazer');

    phraseContainer.innerHTML = '';
    feedback.textContent = '';
    botaoRefazer.style.display = 'none';

    currentPhrase = [];
    displayWords(shuffle([...selectedPhrase]));
}

function goToHome() {
    window.location.href = '../../../../exercicios/exercicios-portugues/exercicios-portugues.html';
}

function replayGame() {
    currentPhraseIndex = 0;
    resetGame();
    document.getElementById('mensagemFinal').style.display = 'none';
}

document.getElementById('botaoRefazer').onclick = retryPhrase;
document.getElementById('botaoVoltar').onclick = goToHome;
document.getElementById('botao-resetar').onclick = replayGame;

window.onload = resetGame;
