function toogleStyleBoxEmail() {
    var email = document.getElementById("email");
    var divErro = document.getElementById("erro");
    var divCorreto = document.getElementById("correto");
    var msgErro = document.getElementById("msg-erro");
    if (validateEmail(email.value)) {
        email.classList.remove("erro")
        divErro.classList.remove("d-block") 
        email.classList.add("correto")
        divCorreto.classList.add("d-blockcorreto")
        msgErro.classList.remove("d-block")
    } else {
        email.classList.add("erro")
        divErro.classList.add("d-block")
        email.classList.remove("correto")
        divCorreto.classList.remove("d-blockcorreto")
        msgErro.classList.add("d-block")
        alert("Digite um E-mail válido")
    }
    console.log(email.value)
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function verificarSenha() {
    var senha = document.getElementById("senha");
    console.log(senha.value)
}



function anoAtual() {
    const ano = new Date().getFullYear()
    document.getElementById("ano").innerHTML = ano
}



