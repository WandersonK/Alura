// Variáveis do Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 2;
    }
  }
  // if (keyIsDown(LEFT_ARROW)) {
  //   xAtor -= 3;
  // }
  // if (keyIsDown(RIGHT_ARROW)) {
  //   xAtor += 3;
  // }
}

function verificaColisao() {
  
  for (let i = 0; i< imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      colidiu();
      if (pontosMaiorQueZero()) {
        meusPontos--;
      }
      somDeColisao.play();
    }
  }
}

function colidiu() {
  
  yAtor = 366;
  // xAtor = 85;
}

function incluiPontos() {
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width/5, 27);
}

function marcaPontos() {
  
  if (yAtor < 15) {
    meusPontos++;
    yAtor = 366;
    // xAtor = 85;
    somDoPonto.play();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 366;
}
