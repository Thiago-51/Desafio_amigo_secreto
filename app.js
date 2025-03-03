let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == ""){
        alert("Por favor, digíte um nome a ser adicionado à lista de amigos.");
    } else {
        listaAmigos.push(amigo);
    }
    limparCampo();
    console.log(listaAmigos);
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function sorteio() {
    let quantidadeAmigos = listaAmigos.length;
    if (quantidadeAmigos == 0) {
        console.log("Não há amigos para realizarmos o sorteio.");
    } else {
        console.log("tudo certo")
    }
    
}
