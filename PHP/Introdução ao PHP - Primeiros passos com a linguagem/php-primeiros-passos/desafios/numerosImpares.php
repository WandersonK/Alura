<?php


// Utilizando "for" para o desafio
$limite = 100;

for ($contador = 0; $contador <= $limite; $contador++) {
    if ($contador % 2 != 0) {
        echo "# $contador" . PHP_EOL;
    }
}

// ================================================================
// Utilizando "while" para o desafio
// $limite = 100;
// $contador = 0;

// while ($contador <= $limite) {
//     if ($contador % 2 != 0) {
//         echo "# $contador" . PHP_EOL;
//     }
//     $contador++;
// }