let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == ""){
        alert("Por favor, digíte um nome a ser adicionado à lista de amigos.");
    } else {
        amigos.push(amigo);
    }
    limparCampo(amigo);
    console.log(amigos);
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function exibirNomes(){
    let quantiAmigos = amigos.length;
    let nomesExibidos = document.getElementById("listaAmigos");
    let n = 0;
    while (n < quantiAmigos) {
        let li = document.createElement("li");
        li.textContent = amigos[n];
        nomesExibidos.appendChild(li);
        n++;
    }
}

function limparListaExibida() {
    nomesExibidos = document.getElementById("listaAmigos");
    nomesExibidos.innerHTML = "";
}

