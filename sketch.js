// let = faça
let campoIdade;

// atribuir um valor numérico
function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("62");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

// if = " se "
// else = " caso contrário "
function geraRecomendacao(idade) {
  if(idade >= 60) {
    if(idade >= 2) {
      return "vôlei";
    } else {
      return "beleza verdadeira";
    }
  } else {
    return "casa mal assombrada ";
  }
}