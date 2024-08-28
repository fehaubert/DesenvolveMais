let button = document.getElementById("handleSubmit");

button.onclick = async function () {
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let data = { nome, descricao }

    const response = await fetch('http://localhost:3000/api/store/task', {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.sucess) {
        alert("Sucesso")
    } else {
        alert('Não');
    }
}

// HTML
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Content</title>
</head>
<body>
    <h1>Conteúdo do Banco de Dados</h1>
    <div id="content"></div>
    <button id="fetchContent">Buscar Conteúdo</button>

    <script src="script.js"></script>
</body>
</html>





*/

// // JavaScript (script.js)
// document.addEventListener("DOMContentLoaded", () => {
//     const fetchContentButton = document.getElementById("fetchContent");
//     const contentDiv = document.getElementById("content");

//     fetchContentButton.addEventListener("click", async () => {
//         try {
//             const response = await fetch('http://localhost:3000/api/store/conteudo', {
//                 method: "GET",
//                 headers: { "Content-type": "application/json;charset=UTF-8" }
//             });

//             const content = await response.json();

//             if (content.success) {
//                 const data = content.data;
//                 let contentHTML = '';

//                 // Iterar sobre os dados para exibi-los
//                 data.forEach(item => {
//                     contentHTML += `<div class="content-item">
//                                         <p>Nome: ${item.nome}</p>
//                                         <p>Descrição: ${item.descricao}</p>
//                                     </div>`;
//                 });

//                 // Definir o HTML dentro da div de conteúdo
//                 contentDiv.innerHTML = contentHTML;
//             } else {
//                 alert('Erro ao buscar conteúdo');
//             }
//         } catch (error) {
//             console.error('Erro ao buscar conteúdo:', error);
//         }
//     });
// });
