getMaterias();

async function getMaterias() {
    const response = await fetch('http://localhost:3005/api/materias', {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        },
    })

    const results = await response.json();

    if(results.success) {
        let materias = results.data;
        let html = document.getElementById("materias");

        materias.forEach(materia => {
            let page = materia.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

            localStorage.setItem(page,materia.id)
            
            let card = "<section class='ir_para' > " +
            "<p class='titulos'>" + materia.nome + "</p>" +
            "<button>"+
            "    <span id='som' class='material-symbols-outlined'>"+
            "        volume_up"+
            "    </span>"+
            "</button>"+
            `<a href=../conteudos/${page}.html>`+
            "    <p class='estudar'>Estudar ></p>"+
            "</a>" +
            "</section>";

            html.innerHTML += card;
        });        

    } else {
        alert(results.message)
    }
}