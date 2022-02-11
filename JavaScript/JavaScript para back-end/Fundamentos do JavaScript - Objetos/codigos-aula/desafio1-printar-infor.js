const infosCliente = {
    nome: "Wanderson",
    conta: 123456,
    cpf: "32345678910",
    saldo: 1000000,
    tipoConta: "Corrente",
    idade: 25
};

console.log(`Meu nome é ${infosCliente.nome} e tenho ${infosCliente.idade} anos.`);

console.log(infosCliente.cpf.substring(0,3));