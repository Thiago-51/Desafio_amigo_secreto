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

