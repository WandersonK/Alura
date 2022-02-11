<?php

$idade = 15;
$numeroDePessoas = 2;

echo "Você só pode entrar se tiver a partir de 18 anos ou ";
echo "a partir de 16 anos acompanhado." . PHP_EOL;

if ($idade >= 18) {
    echo "Você tem $idade anos.\n";
    echo "Pode entrar sozinho.\n";
}
elseif ($idade >= 16 and $numeroDePessoas > 1) {
    echo "Você tem $idade anos e está acompanhado.\n";
    echo "Pode entrar.\n";
}
else {
    echo "Você tem $idade anos. Você não pode entrar.\n";
}

echo PHP_EOL;
echo "Adeus!\n";