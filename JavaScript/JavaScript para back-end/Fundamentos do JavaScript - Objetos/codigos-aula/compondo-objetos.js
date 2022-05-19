const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    fones: ["559123451489", "551112345632"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";
console.log(cliente);