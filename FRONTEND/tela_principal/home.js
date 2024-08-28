document.addEventListener("DOMContentLoaded", function () {
    const userNameElement = document.getElementById('user-name');

    // Obtém o nome do usuário do localStorage
    const userName = localStorage.getItem('userName');

    // Substituindo o texto pelo nome do usuário
    if (userName && userNameElement) {
        userNameElement.textContent = userName;
    }
});
