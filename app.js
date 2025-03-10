let amigos = [];
let x = 0;
let sorteado = document.getElementById("resultado");
let nomesExibidos = document.getElementById("listaAmigos");

//____________________________________________________________________________________
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
//____________________________________________________________________________________
function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}
//____________________________________________________________________________________
function exibirNomes(){
    limparListaExibida(nomesExibidos, "listaAmigos")
    let quantiAmigos = amigos.length;
    let n = 0;
    while (n < quantiAmigos) {
        let li = document.createElement("li");
        li.textContent = amigos[n];
        nomesExibidos.appendChild(li);
        n++;
    }
}
//____________________________________________________________________________________
function limparListaExibida(a, b) {
    a = document.getElementById(b);
    a.innerHTML = "";
}
//____________________________________________________________________________________
function sortearAmigo(){
    limparListaExibida(sorteado, "resultado")
    let posicaoAmigo = parseInt(Math.random() * amigos.length);
    let sortudo = document.createElement("li");
    sortudo.textContent = amigos[posicaoAmigo];
    sorteado.appendChild('O amigo secretro sorteado é: ${sortudo}.');
}

function novaLista(){
    limparCampo();
    limparListaExibida(sorteado, "resultado");
    limparListaExibida(nomesExibidos, "listaAmigos");
    amigos = [];
    sortearAmigo();
    exibirNomes();
}
limparCampo();
