let button = document.getElementById("handleSubmit");

button.onclick = async function () {
    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirme-senha").value;
 
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let results = regexEmail.test(email);
    // console.log(results);

    if(name === "" || email === "" || password === "" || confirmPassword === "") {
        swal({
            title: "Preencha todos os campos!",
            icon: "error",
        });
    } else if(password === "" || password === null) {
        swal({
            title: "Verifique sua senha!",
            icon: "error",
        });
    } else if(password !== confirmPassword) {
        swal({
            title: "Suas senhas não coincidem!",
            icon: "error",
        });
    } else if(email === "") {
        swal({
            title: "Insira seu email!",  
            icon: "error",
        });
    } else if(!results) {
        swal({
            title: "Verifique seu email!",
            icon: "error",
        });
    } else {
        let data = {name, email, password };
        // console.log(data)
 
        const response = await fetch('http://localhost:3005/api/user/create', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });
   
        let content = await response.json();
   
        if (content.success) {
            swal({
                title: "Parabéns!",
                text: "Você foi cadastrado no Desenvolve+!",
                icon: "success",
            }).then(() => {
                window.location.href = "../login/login.html";
            });
        } else {
            swal({
                title: "Email já cadastrado",
                icon: "error",
            });
        }
    }
}