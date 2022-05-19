const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// // Forma que eu fiz

// function mediaGeral(sala) {
//     let mediaSala = 0;

//     for (let i = 0; i < sala.length; i++) {
//         mediaSala += sala[i];
//     }

//     return mediaSala / sala.length;
// }

// console.log("Nota geral da Sala de JS: " + mediaGeral(salaJS));
// console.log("Nota geral da Sala de Java: " + mediaGeral(salaJava));
// console.log("Nota geral da Sala de Python: " + mediaGeral(salaPython));

// Forma que o professor fez
function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
    return somaDasNotas / notasDaSala.length;
}

console.log(`Média da Sala de JavaScript ${mediaSala(salaJS)}.`);
console.log(`Média da Sala de Java ${mediaSala(salaJava)}.`);
console.log(`Média da Sala de Python ${mediaSala(salaPython)}.`);


// Referete ao script media.js
const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(media)