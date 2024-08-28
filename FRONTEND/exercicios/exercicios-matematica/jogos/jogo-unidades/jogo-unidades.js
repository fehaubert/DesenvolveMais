let centenas, dezenas, unidades;
let correctAnswers = 0;
let totalQuestions = 0;
const maxQuestions = 15;

function generateEquacao() {
    if (totalQuestions < maxQuestions) {
        centenas = Math.floor(Math.random() * 10);
        dezenas = Math.floor(Math.random() * 10);
        unidades = Math.floor(Math.random() * 10);
        document.getElementById('centenas').innerText = centenas;
        document.getElementById('dezenas').innerText = dezenas;
        document.getElementById('unidades').innerText = unidades;
        document.getElementById('resultado').innerText = '';
        document.getElementById('resposta').value = '';
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('resposta').value);
    const correctAnswer = centenas * 100 + dezenas * 10 + unidades;
    
    if (userAnswer === correctAnswer) {
        document.getElementById('resultado').innerText = 'Correto! 🎉';
        correctAnswers++;
    } else {
        document.getElementById('resultado').innerText = `Errado! A resposta certa era ${correctAnswer}.`;
    }

    totalQuestions++;
    setTimeout(generateEquacao, 5000);
}

function endGame() {
    document.getElementById('area-de-jogo').classList.add('hidden');
    document.getElementById('mensagem-final').classList.remove('hidden');
    document.getElementById('pontos-finais').innerText = `Você acertou ${correctAnswers} de ${maxQuestions} contas.`;
}

function resetGame() {
    correctAnswers = 0;
    totalQuestions = 0;
    document.getElementById('area-de-jogo').classList.remove('hidden');
    document.getElementById('mensagem-final').classList.add('hidden');
    generateEquacao();
}

function goToHome() {
    window.location.href = '../../../../exercicios/exercicios-matematica/exercicios-matematica.html';
}

generateEquacao();
