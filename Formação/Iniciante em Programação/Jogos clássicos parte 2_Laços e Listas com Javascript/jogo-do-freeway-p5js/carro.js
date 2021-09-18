let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 263, 318];
let velocidades = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidades[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  
  for (let i = 0; i < imagemCarros.length; i++) {
    if (xCarros[i] < -50) {
      xCarros[i] = 600;
    }
  }
}


// Outra forma de fazer o voltaPosicaoInicialDoCarro conforme Professor

// function voltaPosicaoInicialDoCarro(){
//   for (let i = 0; i < imagemCarros.length; i = i + 1){
//     if (passouTodaATela(xCarros[i])){
//       xCarros[i] = 600;
//     }
//   }
// }

// function passouTodaATela(xCarro){
//   return xCarro < - 50;
// }
