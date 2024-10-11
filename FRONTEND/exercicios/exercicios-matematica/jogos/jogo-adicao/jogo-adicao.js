let num1, num2;
let correctAnswers = 0;
let totalQuestions = 0;
const maxQuestions = 1;

function generateEquacao() {
    if (totalQuestions < maxQuestions) {
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        document.getElementById('num1').innerText = num1;
        document.getElementById('num2').innerText = num2;
        document.getElementById('resultado').innerText = '';
        document.getElementById('resposta').value = ''; 
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('resposta').value);
    const correctAnswer = num1 + num2;
    
    if (userAnswer === correctAnswer) {
        document.getElementById('resultado').innerText = 'Correto!';
        correctAnswers++;
    } else {
        document.getElementById('resultado').innerText = `Errado! A resposta certa era ${correctAnswer}.`;
    }

    totalQuestions++;
    setTimeout(generateEquacao, 3000);
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
    window.location.href = '../../exercicios-matematica.html';
}

generateEquacao();
