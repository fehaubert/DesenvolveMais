const vogais = "AEIOU".split('');
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const consoantes = alfabeto.filter(letter => !vogais.includes(letter));

let currentLetter = '';
let attemptCount = 0;
const maxAttempts = 15;

function generateRandomLetter() {
    const allLetters = alfabeto;
    const randomIndex = Math.floor(Math.random() * allLetters.length);
    currentLetter = allLetters[randomIndex];
    document.getElementById('letra').textContent = currentLetter;
    document.getElementById('botao-resetar').style.display = "none";
}

function isVowel(letter) {
    return vogais.includes(letter);
}

function checkLetter(isVowelClicked) {
    const feedback = document.getElementById('feedback');
    const isVowelLetter = isVowel(currentLetter);
    
    if (isVowelClicked === isVowelLetter) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";
        
    } else {
        feedback.textContent = "Ops! Tente novamente.";
        feedback.style.color = "red";
    }
    
    attemptCount++;
    if (attemptCount >= maxAttempts) {
        document.getElementById('hidden').style.display = "none";
        document.getElementById('letra').style.display = "none";
        document.getElementById('botao-vogal').style.display = "none";
        document.getElementById('botao-consoante').style.display = "none";
        document.getElementById('feedback').style.display = "none";
        document.getElementById('botao-resetar').style.display = "flex";
        document.getElementById('mensagem-final').classList.remove('hidden');
    } else {
        setTimeout(generateRandomLetter, 1000);
    }
}

document.getElementById('botao-vogal').onclick = () => checkLetter(true);
document.getElementById('botao-consoante').onclick = () => checkLetter(false);
document.getElementById('botao-resetar').onclick = function() {
    window.location.reload();
};
document.getElementById('botao-voltar').onclick = () => window.location.href = '../../../../exercicios/exercicios-portugues/exercicios-portugues.html';

window.onload = () => {
    generateRandomLetter();
};