//Lista com os cards do jogo.
let CardList = [
{
    nome: "fries",
    img: "images/fries.png",
},

{
    nome: "cheeseburguer",
    img: "images/cheseburger.png",
},

{
    nome: "ice-cream",
    img: "images/ice-cream.png",
},

{
    nome: "pizza",
    img: "images/pizza.png",
},

{
    nome: "milkshake",
    img: "images/milkshake.png",
},

{
    nome: "hotdog",
    img: "images/hotdog.png",
},

{
    nome: "fries",
    img: "images/fries.png",
},

{
    nome: "cheeseburguer",
    img: "images/cheseburger.png",
},

{
    nome: "ice-cream",
    img: "images/ice-cream.png",
},

{
    nome: "pizza",
    img: "images/pizza.png",
},

{
    nome: "milkshake",
    img: "images/milkshake.png",
},

{
    nome: "hotdog",
    img: "images/hotdog.png",
},
]

//Muda os elementos dentro da lista de lugar, fazendo as cartas ficarem em ordem randomicas.
CardList.sort(function aleatorio (){
    return 0.5 - Math.random()
})

//Cria um atributo com a imagem e posição e chama a função de virar a carta para cima.
function criarelementoimagem(posicao){
    let card = document.createElement("img")
    card.setAttribute("src", "images/back.jpg")
    card.setAttribute("data-posicao", posicao)
    card.addEventListener("click", virarImagem)
    return card
}

//busca o elemento grid no HTML e adiciona as cartas na interface.
function criarTabuleiro(){
    let grid = document.querySelector(".grid")
    
    for (let voltas = 0; voltas < CardList.length; voltas++){
        let cardImagem = criarelementoimagem(voltas)
        grid.appendChild(cardImagem)
    }
}

criarTabuleiro()


let cardsViradosNome = [];
let cardsViradosNumero = [];

//guarda a posição da última carta clicada
function virarImagem() {
  let posicao = this.getAttribute("data-posicao");

  //vira a carta clicada
  this.setAttribute("src", CardList[posicao].img);
  cardsViradosNome.push(CardList[posicao].nome);
  cardsViradosNumero.push(posicao);

  // se já virou 2 cards
  if (cardsViradosNome.length === 2) {
    // verifica se são iguais
    setTimeout(checarIgualdade, 300);
  }
}

let cardsDescobertos = []

function checarIgualdade(){
    let cards = document.querySelectorAll("img");

    let posicaoCardEscolhidoUm = cardsViradosNumero[0];
    let posicaoCardEscolhidoDois = cardsViradosNumero[1];
    let nomePrimeiraImagemEscolhida = cardsViradosNome[0];
    let nomeSegundaImagemEscolhida = cardsViradosNome[1];

    //Alerta uma mensagem quando clicado na mesma carta duas vezes e vira a carta de volta para baixo.
    if (posicaoCardEscolhidoUm === posicaoCardEscolhidoDois) {
        cards[posicaoCardEscolhidoUm].setAttribute("src", "images/back.jpg");
        cards[posicaoCardEscolhidoDois].setAttribute("src", "images/back.jpg");
        alert("Você escolheu a mesma imagem duas vezes!");
    }

    //Se as cartas forem iguais, a carta permanece para cima e adiciona na lista de cartas descobertas.
    else if (nomePrimeiraImagemEscolhida === nomeSegundaImagemEscolhida) {
        cards[posicaoCardEscolhidoUm].removeEventListener("click", virarImagem);
        cards[posicaoCardEscolhidoDois].removeEventListener("click", virarImagem);
        cardsDescobertos.push(cardsViradosNome);
    }
    
    //Vira as duas cartas para baixo, caso a carta seja diferente.
    else {
        cards[posicaoCardEscolhidoUm].setAttribute("src", "images/back.jpg");
        cards[posicaoCardEscolhidoDois].setAttribute("src", "images/back.jpg");
        alert("Tente novamente!");
    }

    cardsViradosNome = [];
    cardsViradosNumero = [];

    //lê se a lista de cartas descobertas está completa e exibe uma mensagem.
    if (cardsDescobertos.length === CardList.length / 2) {
        alert("Parabéns, você encontrou todos os pares!");
    }

}
