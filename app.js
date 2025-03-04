let amigos = [];
let x = 0;


function adicionarAmigo() {
    x = 0
    let amigo = document.querySelector('input').value;
    if (amigo == ""){
        alert("Por favor, digíte um nome a ser adicionado à lista de amigos.");
    }else {
        if (amigos.length == 0){
            amigos.push(amigo);
        } else{
            while (x < amigos.length){
                if (amigo == amigos[x]){
                    alert("Este nome já está na lista, digíte outro.");
                    break;
                }else {
                    if (x == (amigos.length - 1)){
                        amigos.push(amigo);
                        break;
                    }
                }
                x++;
            }
        }
        limparCampo();
        console.log(amigos)
        exibirNomes();
    }
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function exibirNomes(){
    limparListaExibida()
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

limparCampo();