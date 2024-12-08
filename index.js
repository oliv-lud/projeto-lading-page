var Leonardo = window.document.getElementById("cardLeonardo");
var Samantha = window.document.getElementById("cardSamantha");
var Bruna = window.document.getElementById("cardBruna");
var setaParaEsquerda = window.document.getElementById("setaEsquerda");
var setaParaDireita = window.document.getElementById("setaDireita");

function rolarParaDireita() {
  Leonardo.style = "display:none";
  Bruna.style = "display:flex";
  setaParaEsquerda.style = "display:flex";
  setaParaDireita.style = "display:none";
}

function rolarParaEsquerda() {
  Leonardo.style = "display:flex";
  Bruna.style = "display.none";
  setaParaDireita.style = "display:flex";
  setaParaEsquerda.style = "display:none";
}
