var setaDireita = window.document.getElementById("seta-direita");
var setaEsquerda = window.document.getElementById("seta-esquerda");
var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");

function RolarParaDireita() {
    Leonardo.style = "display: none";
    Bruna.style = "display: flex";
    setaEsquerda.style = "display: flex";
    setaDireita.style = "display: none";
}

