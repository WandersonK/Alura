const cliente = {
    nome: "Wanderson",
    idade: 24,
    cpf: "12345678912",
    email: "wanderson@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

// console.log(cliente[chaves[0]]); // Acessar um específico

chaves.forEach(info => console.log(cliente[info])); // Acessa todos os itens

console.log(cliente["conta"]); // Não apresenta erro, mas exibe undefined.