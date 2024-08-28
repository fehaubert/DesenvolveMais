document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if(id) {
        fetch(`http://localhost:3000/api/get/conteudo/${id}`).then(response => response.json())
        .then(data => {
            if(data.success) {
                const detalhesConteiner = document.getElementById("detalhesConteiner");

                detalhesConteiner.innerHTML =
                `
                    
                `
            }
        })
    }
})