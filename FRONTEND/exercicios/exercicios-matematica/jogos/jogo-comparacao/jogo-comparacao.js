let num1, num2;
let correctAnswers = 0;
let totalQuestions = 0;
const maxQuestions = 15;

function generateComparacao() {
    if (totalQuestions < maxQuestions) {
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
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
    const correctAnswer = Math.max(num1, num2);
    
    if (userAnswer === correctAnswer) {
        document.getElementById('resultado').innerText = 'Correto!';
        correctAnswers++;
    } else {
        document.getElementById('resultado').innerText = `Errado! O número maior era ${correctAnswer}.`;
    }

    totalQuestions++;
    setTimeout(generateComparacao, 5000);
}

function endGame() {
    document.getElementById('area-de-jogo').classList.add('hidden');
    document.getElementById('mensagem-final').classList.remove('hidden');
    document.getElementById('pontos-finais').innerText = `Você acertou ${correctAnswers} de ${maxQuestions} comparações.`;
}

function resetGame() {
    correctAnswers = 0;
    totalQuestions = 0;
    document.getElementById('area-de-jogo').classList.remove('hidden');
    document.getElementById('mensagem-final').classList.add('hidden');
    generateComparacao();
}

function goToHome() {
    window.location.href = '../../../../exercicios/exercicios-matematica/exercicios-matematica.html';
}

generateComparacao();
