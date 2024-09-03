document.addEventListener("DOMContentLoaded", function () {
    const userNameElement = document.getElementById('user-name');

    const userName = localStorage.getItem('userName');

    if (userName && userNameElement) {
        userNameElement.textContent = userName;
    }
});
