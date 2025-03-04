*Sobre o desenvolvimento deste projeto*


Ao realizar este projeto, tive como inteção realizar meu primeiro challenge do programa ONE, isto é, foi meu primeiro projeto ao longo desta jornada.
Neste challenge pude consolidar parte do que aprendi da linguagem javaScript e também aprender a utilizar o chatGPT para auxiliar meu trabalho em tópicos que não tenho muito conhecimento, como a linguagem HTML.


*O que cada função do app.js faz?*


Vou começar falando sobre as funções que tem como objetivo criar uma interação do usuario com o site utilizando os botões "adicionar", "Sortear Amigo" e "Crie uma nova lista". Estas funções são:


*   adicionarAmigo();
*   sortearAmigo(); 
*   e novaLista().


Seus nomes são o suficiente para sabermos com que botão cada uma dessas funções interage.


O que posso dizer sobre estas funções é que ambas utilizam fuções do javaScript para interagir com o arquivo index.html. A função adicionarAmigo() é responsavel por pegar o nome que foi escrito no espaço que foi destinado para tal e adicionar a nossa lista de amigos se e somente se o nome escrito não for uma string vazia ("") ou um nome que já está na lista (necessário para evitar confusão).

A função sortearAmigo() foi criada que maneira que geramos um número aleatório que vai de 0 até o indice máximo de nossa lista de amigos. Este número aleatório é utilizado para escolhermos aleatóriamente o amigo secreto.

Já a função novaLista() faz uso das duas funções já descritas e as funções limparCampo() e LimparListaExibida(a, b) que todas as listas e campos do site sejam limpos de possamos criar uma nova lista de amigos a ser sorteado.

Agora só resta a função exibirNomes(), que nada mais faz do que pegar nossa lista de amigos e escrever cada um dos nomes em nossa lista em uma lista ul como elementos li desta lista.

Espero que este README tenha auxiliado no entendimento do programa contido no app.js.

