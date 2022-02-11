<?php

$peso = 120;
$altura = 1.5;

$imc = $peso / ($altura * $altura);

echo "Seu IMC é de " . round($imc, 1) . PHP_EOL;

if ($imc < 18.5) {
    echo "Abaixo do peso.";
} elseif ($imc >= 18.5 and $imc < 25) {
    echo "Peso Normal.";
} elseif ($imc >= 25 and $imc < 30) {
    echo "Sobrepeso.";
} elseif ($imc >= 30 and $imc < 35) {
    echo "Obesidade Grau I.";
} elseif ($imc >= 35 and $imc < 40) {
    echo "Obesidade Grau II.";
} else {
    echo "Obesidade Grau III ou Mórbida.";
}
echo PHP_EOL;