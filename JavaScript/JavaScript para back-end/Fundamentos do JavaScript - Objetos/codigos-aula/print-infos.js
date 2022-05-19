const cliente = {
    nome: "Wanderson",
    idade: 24,
    cpf: "12345678912",
    email: "wanderson@email.com"
}
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`); // Notação de template string

console.log(cliente.cpf.substring(0, 3));