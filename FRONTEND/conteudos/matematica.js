getConteudos();

async function getConteudos() {
    let idMateria = localStorage.getItem('matematica');

    let data = { idMateria };

    const response = await fetch('http://localhost:3005/api/conteudos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results.data)
        let conteudos = results.data;
        let html = document.getElementById("conteudos");

        conteudos.forEach(conteudos => {
            let page = conteudos.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

            let card = "<section class='ir_para' > " +
                "<p class='titulos'>" + conteudos.nome + "</p>" +
                "<button>" +
                "    <span id='som' class='material-symbols-outlined'>" +
                "        volume_up" +
                "    </span>" +
                "</button>" +
                `<a href="../detalhes_conteudo/detalhes_conteudo.html?content=${page}">` +
                "    <p class='estudar'>Estudar ></p>" +
                "</a>" +
                "</section>";

            html.innerHTML += card;
        });

    } else {
        alert(results.message)
    }
}

