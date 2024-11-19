const items = [
    {
        image: 'img/cachorro.jpg',
        correctLetter: 'C',
        options: ['B', 'C', 'A']
    },
    {
        image: 'img/faca.webp',
        correctLetter: 'F',
        options: ['F', 'D', 'E']
    },
    {
        image: 'img/girafa.webp',
        correctLetter: 'G',
        options: ['G', 'I', 'H']
    },
    {
        image: 'img/livros.jpg',
        correctLetter: 'L',
        options: ['K', 'J', 'L']
    },
    {
        image: 'img/maca.jpg',
        correctLetter: 'M',
        options: ['O', 'N', 'M']
    },
    {
        image: 'img/pato.jpeg',
        correctLetter: 'P',
        options: ['R', 'Q', 'P']
    },
    {
        image: 'img/uva.webp',
        correctLetter: 'U',
        options: ['T', 'S', 'U']
    },
    {
        image: 'img/ventilador.webp',
        correctLetter: 'V',
        options: ['V', 'X', 'W']
    },
    {
        image: 'img/zebra.jpg',
        correctLetter: 'Z',
        options: ['Z', 'Y']
    }
];

let currentIndex = 0;

function loadNextItem() {
    if (currentIndex >= items.length) {
        showCompletionMessage();
        return;
    }
    
    const item = items[currentIndex];
    document.getElementById('object-image').src = item.image;
    document.getElementById('resultado').textContent = '';

    const lettersContainer = document.getElementById('container-letras');
    lettersContainer.innerHTML = '';

    item.options.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'letter-button';
        button.textContent = letter;
        button.onclick = () => checkAnswer(letter);
        lettersContainer.appendChild(button);
    });
}

function checkAnswer(selectedLetter) {
    const item = items[currentIndex];
    if (selectedLetter === item.correctLetter) {
        document.getElementById('resultado').textContent = 'Correto!';
        currentIndex++;
        setTimeout(loadNextItem, 1000);
    } else {
        document.getElementById('resultado').textContent = 'Tente novamente!';
    }
}

function showCompletionMessage() {
    document.getElementById('game-container').innerHTML = `
        <h1>Parabéns!</h1>
        <p>Você completou o jogo!</p>
        <button id="botao-reiniciar" onclick="location.reload()">Reiniciar Jogo</button>
        <button id="botao-voltar" onclick="window.location.href='../../../../exercicios/exercicios-portugues/exercicios-portugues.html'">Voltar à Tela de Jogos</button> <br>
    `;
}

window.onload = loadNextItem;
