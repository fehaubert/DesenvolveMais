const words = [
    { correctOrder: ['GA', 'TO'], syllables: ['TO', 'GA'] },
    { correctOrder: ['LA', 'RAN', 'JA'], syllables: ['RAN', 'LA', 'JA'] },
    { correctOrder: ['BA', 'NA', 'NA'], syllables: ['NA', 'BA', 'NA'] },
    { correctOrder: ['CO', 'BRA'], syllables: ['BRA', 'CO'] },
    { correctOrder: ['MA', 'CA', 'CO'], syllables: ['CO', 'CA', 'MA'] },
    { correctOrder: ['PI', 'PA'], syllables: ['PA', 'PI'] },
    { correctOrder: ['GAR', 'RA', 'FA'], syllables: ['FA', 'GAR', 'RA'] },
    { correctOrder: ['CE', 'BO', 'LA'], syllables: ['BO', 'LA', 'CE'] },
    { correctOrder: ['MO', 'RAN', 'GA'], syllables: ['GA', 'RAN', 'MO'] },
    { correctOrder: ['GI', 'RA', 'FA'], syllables: ['GI', 'FA', 'RA'] }
];

let currentWordIndex = 0;
let currentOrder = [];
document.getElementById('botao-resetar').style.display = "none";

function moveSyllable(event) {
    let syllableElement = event.target;
    let syllableText = syllableElement.textContent;

    if (syllableElement.parentElement.id === 'conteiner-silabas') {
        let dropZones = document.querySelectorAll('.drop-zone');
        for (let zone of dropZones) {
            if (zone.childElementCount === 0) {
                zone.appendChild(syllableElement);
                currentOrder.push(syllableText);
                break;
            }
        }
    } else {
        let dropZones = document.querySelectorAll('.drop-zone');
        for (let zone of dropZones) {
            if (zone.contains(syllableElement)) {
                zone.removeChild(syllableElement);
                currentOrder = currentOrder.filter(item => item !== syllableText);
                document.getElementById('conteiner-silabas').appendChild(syllableElement);
                break;
            }
        }
    }

    if (currentOrder.length === words[currentWordIndex].correctOrder.length) {
        checkResult();
    }
}

function checkResult() {
    let resultElement = document.getElementById("resultado");
    let botaoProximo = document.getElementById("botao-proximo");
    let botaoRefazer = document.getElementById("botao-refazer");
    let botaoVoltar = document.getElementById("botao-voltar");

    if (JSON.stringify(currentOrder) === JSON.stringify(words[currentWordIndex].correctOrder)) {
        resultElement.textContent = "Parabéns! Você acertou!";
        botaoProximo.style.display = 'inline-block';
        botaoRefazer.style.display = 'none';
    } else {
        resultElement.textContent = "Tente novamente!";
        botaoProximo.style.display = 'none';
        botaoRefazer.style.display = 'inline-block';
    }
}

function nextWord() {
    currentWordIndex++;
    if (currentWordIndex < words.length) {
        loadWord();
    } else {
        document.querySelector('main').innerHTML = `
            <h1>Parabéns! Você completou o jogo!</h1>
            <button id="botao-resetar" class="botao-reiniciar">Reiniciar Jogo</button>
            <button id="botao-voltar" onclick="goHome()">Voltar à Tela de Jogos</button>
        `;
        document.getElementById('botao-resetar').onclick = function() {
            window.location.reload();
        };
    }
}

function retryWord() {
    currentOrder = [];

    document.querySelectorAll('.drop-zone').forEach(zone => {
        while (zone.firstChild) {
            let syllable = zone.firstChild;
            document.getElementById('conteiner-silabas').appendChild(syllable);
        }
    });

    loadWord();

    document.getElementById("resultado").textContent = '';
    document.getElementById("botao-voltar").style.display = 'none';
}

function loadWord() {
    currentOrder = [];
    let word = words[currentWordIndex];
    let syllablesContainer = document.getElementById("conteiner-silabas");
    let resultElement = document.getElementById("resultado");
    let botaoProximo = document.getElementById("botao-proximo");
    let botaoRefazer = document.getElementById("botao-refazer");
    let botaoVoltar = document.getElementById("botao-voltar");

    document.querySelectorAll('.drop-zone').forEach((zone, index) => {
        zone.style.display = index < word.correctOrder.length ? 'flex' : 'none';
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });

    syllablesContainer.innerHTML = '';
    word.syllables.forEach((syllable, index) => {
        let syllableElement = document.createElement('div');
        syllableElement.className = 'syllable';
        syllableElement.id = `syllable-${index + 1}`;
        syllableElement.textContent = syllable;
        syllableElement.addEventListener('click', moveSyllable);
        syllablesContainer.appendChild(syllableElement);
    });

    resultElement.textContent = '';
    botaoProximo.style.display = 'none';
    botaoRefazer.style.display = 'none';
    botaoVoltar.style.display = 'none';
}

document.getElementById('botao-resetar').onclick = function() {
    window.location.reload();
};

function goHome() {
    window.location.href = '../../../../exercicios/exercicios-portugues/exercicios-portugues.html';
}

window.onload = loadWord;
