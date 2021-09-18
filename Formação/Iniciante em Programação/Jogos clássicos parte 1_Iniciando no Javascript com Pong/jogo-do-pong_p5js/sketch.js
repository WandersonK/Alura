// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let distancia = diametro - 11;

// Velocidade da Bolinha
let v = 6;
let velocidadeXBolinha = v;
let velocidadeYBolinha = v;

// Variáveis Globais Raquetes
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// Variáveis da Raquete Esquerda
let xRaqueteE = 5;
let yRaqueteE = 150;

// Variáveis da Raquete Direita
let xRaqueteD = 580;
let yRaqueteD = 150;
let velocidadeYRaqueteD = 0;
let chanceDeErrar = 0;

// Variáveis Placar do Jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// Sons do Jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  
  raquetada = loadSound("Sons/raquetada.mp3");
  trilha = loadSound("Sons/trilha.mp3");
  ponto = loadSound("Sons/ponto.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  
  background(0);
  
  mostraBolinha();
  movimentaBolinha();
  defineLimiteBorda();
  
  mostraRaquete(xRaqueteE, yRaqueteE);
  movimentaRaqueteE();
  verificaColisaoRaqueteE();
  
  mostraRaquete(xRaqueteD, yRaqueteD);
  movimentaRaqueteD();
  verificaColisaoRaqueteD();
  
  incluiPlacar();
  marcaPonto();
  
}


function mostraBolinha() {
  
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function defineLimiteBorda() {
  
  if (xBolinha > (width - distancia) || 
      xBolinha < distancia) {
    
    velocidadeXBolinha *= -1;    
  }
  if (yBolinha > (height - distancia) || 
      yBolinha < distancia) {
    
    velocidadeYBolinha *= -1;      
  }
  
}

function mostraRaquete(x, y) {
  
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaqueteE() {
  
  if (keyIsDown(UP_ARROW)) {
    yRaqueteE -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteE += 10;
  }
}

function verificaColisaoRaqueteE() {
  
  if ((xBolinha - distancia) < (xRaqueteE + comprimentoRaquete) && 
        (yBolinha - distancia) < (yRaqueteE + alturaRaquete) && 
          (yBolinha + distancia) > yRaqueteE) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaqueteD() {
  
    if ((xBolinha + distancia) > xRaqueteD &&
         (yBolinha + distancia) < (yRaqueteD + alturaRaquete) &&
           (yBolinha - distancia) > yRaqueteD) {
    velocidadeXBolinha *= -1;
      raquetada.play();
  }
}

function movimentaRaqueteD() {
  
  velocidadeYRaqueteD = yBolinha - yRaqueteD - (comprimentoRaquete / 2) - 30;
  yRaqueteD += velocidadeYRaqueteD + chanceDeErrar;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 39){
      chanceDeErrar = 40;
    }
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35) {
      chanceDeErrar = 35;
    }
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  
  fill(255);
  text(meusPontos, 170, 26);
  
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  
  if ((xBolinha + distancia) > 600) {
    meusPontos++;
    ponto.play();
  }
  if ((xBolinha - distancia) < 0) {
    pontosDoOponente++;
    ponto.play();
  }
}


// Código Professor

// //variáveis da bolinha
// let xBolinha = 300;
// let yBolinha = 200;
// let diametro = 15;
// let raio = diametro / 2 ;

// //velocidade da bolinha
// let velocidadeXBolinha = 6;
// let velocidadeYBolinha = 6;


// //variáveis da raquete
// let xRaquete = 5;
// let yRaquete = 150;
// let raqueteComprimento = 10;
// let raqueteAltura = 90;

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);
//   mostraBolinha();
//   movimentaBolinha();
//   verificaColisaoBorda();
//   mostraRaquete();
//   movimentaMinhaRaquete();
//   verificaColisaoRaquete();
// }

// function mostraBolinha(){
//   circle(xBolinha, yBolinha, diametro);
// }

// function movimentaBolinha(){
//   xBolinha += velocidadeXBolinha;
//   yBolinha += velocidadeYBolinha;
// }

// function verificaColisaoBorda(){
//   if (xBolinha + raio> width ||
//      xBolinha - raio< 0){
//     velocidadeXBolinha *= -1;
//   }
//   if (yBolinha + raio> height ||
//      yBolinha - raio < 0){
//     velocidadeYBolinha *= -1;
//   }
// }

// function mostraRaquete(){
//   rect(xRaquete, yRaquete, raqueteComprimento, 
//       raqueteAltura);
// }

// function movimentaMinhaRaquete(){
//   if (keyIsDown(UP_ARROW)){
//     yRaquete -= 10;
//   }
//   if (keyIsDown(DOWN_ARROW)){
//     yRaquete += 10;
//   }
// }

// function verificaColisaoRaquete(){
//   if (xBolinha - raio < xRaquete + raqueteComprimento && 
//       yBolinha - raio < yRaquete + raqueteAltura && 
//       yBolinha + raio > yRaquete){
//     velocidadeXBolinha *= -1;
//   }
// }




// ===================   Professor Gabarito 2 ====================
// =================== Utilizando a biblioteca externa https://github.com/bmoren/p5.collide2D

// //variáveis da bolinha
// let xBolinha = 300;
// let yBolinha = 200;
// let diametro = 15;
// let raio = diametro / 2 ;

// //velocidade da bolinha
// let velocidadeXBolinha = 6;
// let velocidadeYBolinha = 6;
// let raqueteComprimento = 10;
// let raqueteAltura = 90;

// //variáveis da raquete
// let xRaquete = 5;
// let yRaquete = 150;

// //variáveis do oponente
// let xRaqueteOponente = 585;
// let yRaqueteOponente = 150;
// let velocidadeYOponente;

// let colidiu = false;

// //placar do jogo
// let meusPontos = 0;
// let pontosDoOponente = 0;

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);
//   mostraBolinha();
//   movimentaBolinha();
//   verificaColisaoBorda();
//   mostraRaquete(xRaquete, yRaquete);
//   movimentaMinhaRaquete();
//   //verificaColisaoRaquete();
//   verificaColisaoRaquete(xRaquete, yRaquete);
//   mostraRaquete(xRaqueteOponente, yRaqueteOponente);
//   movimentaRaqueteOponente();
//   verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
//   incluiPlacar();
//   marcaPonto();
// }

// function mostraBolinha(){
//   circle(xBolinha, yBolinha, diametro);
// }

// function movimentaBolinha(){
//   xBolinha += velocidadeXBolinha;
//   yBolinha += velocidadeYBolinha;
// }

// function verificaColisaoBorda(){
//   if (xBolinha + raio> width ||
//      xBolinha - raio< 0){
//     velocidadeXBolinha *= -1;
//   }
//   if (yBolinha + raio> height ||
//      yBolinha - raio < 0){
//     velocidadeYBolinha *= -1;
//   }
// }

// function mostraRaquete(x,y){
//   rect(x, y, raqueteComprimento, 
//       raqueteAltura);
// }

// function movimentaMinhaRaquete(){
//   if (keyIsDown(UP_ARROW)){
//     yRaquete -= 10;
//   }
//   if (keyIsDown(DOWN_ARROW)){
//     yRaquete += 10;
//   }
// }

// function verificaColisaoRaquete(){
//   if (xBolinha - raio < xRaquete + raqueteComprimento && 
//       yBolinha - raio < yRaquete + raqueteAltura && 
//       yBolinha + raio > yRaquete){
//     velocidadeXBolinha *= -1;
//   }
// }

// function verificaColisaoRaquete(x, y){
//   colidiu = collideRectCircle(x, y,raqueteComprimento,raqueteAltura,
//                               xBolinha,yBolinha,raio);
//   if (colidiu){
//     velocidadeXBolinha *= -1;
//   }
// }

// function movimentaRaqueteOponente(){
//   velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
//   yRaqueteOponente += velocidadeYOponente
// }

// function incluiPlacar(){
//   fill(255);
//   text(meusPontos, 278, 26);
//   text(pontosDoOponente, 321, 26)
// }

// function marcaPonto(){
//   if (xBolinha > 590){
//     meusPontos += 1;
//   }
//   if (xBolinha < 10){
//     pontosDoOponente += 1;
//   }
// }


// ============================ Professor 3 ========================
// ============================ Utilizando os sons ===========
// //variáveis da bolinha
// let xBolinha = 300;
// let yBolinha = 200;
// let diametro = 13;
// let raio = diametro / 2 ;

// //velocidade da bolinha
// let velocidadeXBolinha = 6;
// let velocidadeYBolinha = 6;
// let raqueteComprimento = 10;
// let raqueteAltura = 90;

// //variáveis da raquete
// let xRaquete = 5;
// let yRaquete = 150;

// //variáveis do oponente
// let xRaqueteOponente = 585;
// let yRaqueteOponente = 150;
// let velocidadeYOponente;

// let colidiu = false;

// //placar do jogo
// let meusPontos = 0;
// let pontosDoOponente = 0;

// //sons do jogo
// let ponto;
// let raquetada;
// let trilha;

// function preload(){
//   trilha = loadSound("trilha.mp3");
//   raquetada = loadSound("raquetada.mp3");
//   ponto = loadSound("ponto.mp3");
// }

// function setup() {
//   createCanvas(600, 400);
//   trilha.loop();
// }

// function draw() {
//   background(0);
//   mostraBolinha();
//   movimentaBolinha();
//   verificaColisaoBorda();
//   mostraRaquete(xRaquete, yRaquete);
//   movimentaMinhaRaquete();
//   //verificaColisaoRaquete();
//   verificaColisaoRaquete(xRaquete, yRaquete);
//   mostraRaquete(xRaqueteOponente, yRaqueteOponente);
//   movimentaRaqueteOponente();
//   verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
//   incluiPlacar();
//   marcaPonto();
// }

// function mostraBolinha(){
//   circle(xBolinha, yBolinha, diametro);
// }

// function movimentaBolinha(){
//   xBolinha += velocidadeXBolinha;
//   yBolinha += velocidadeYBolinha;
// }

// function verificaColisaoBorda(){
//   if (xBolinha + raio> width ||
//      xBolinha - raio< 0){
//     velocidadeXBolinha *= -1;
//   }
//   if (yBolinha + raio> height ||
//      yBolinha - raio < 0){
//     velocidadeYBolinha *= -1;
//   }
// }

// function mostraRaquete(x,y){
//   rect(x, y, raqueteComprimento, 
//       raqueteAltura);
// }

// function movimentaMinhaRaquete(){
//   if (keyIsDown(UP_ARROW)){
//     yRaquete -= 10;
//   }
//   if (keyIsDown(DOWN_ARROW)){
//     yRaquete += 10;
//   }
// }

// function verificaColisaoRaquete(){
//   if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
//     velocidadeXBolinha *= -1;
//   }
// }

// function verificaColisaoRaquete(x, y){
//   colidiu = collideRectCircle(x, y,raqueteComprimento,raqueteAltura,
// xBolinha,yBolinha,raio);
//   if (colidiu){
//     velocidadeXBolinha *= -1;
//     raquetada.play();
//   }
// }

// function movimentaRaqueteOponente(){
//   velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
//   yRaqueteOponente += velocidadeYOponente
// }

// function incluiPlacar(){
//   stroke(255);
//   textAlign(CENTER);
//   textSize(16);
//   fill(color(255, 140, 0));
//   rect(150, 10, 40, 20);
//   fill(255);
//   text(meusPontos, 170, 26);
//   fill(color(255, 140, 0));
//   rect(450, 10, 40, 20);
//   fill(255);
//   text(pontosDoOponente, 470, 26);
// }

// function marcaPonto(){
//   if (xBolinha > 590){
//     meusPontos += 1;
//     ponto.play();
//   }
//   if (xBolinha < 10){
//     pontosDoOponente += 1;
//     ponto.play();
//   }
// }

