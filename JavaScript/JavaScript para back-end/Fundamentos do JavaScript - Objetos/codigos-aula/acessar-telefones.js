const cliente = {
    nome: "Wanderson",
    idade: 24,
    cpf: "12345678912",
    email: "wanderson@email.com",
    fones: ["559123451489", "551112345632"]
}

cliente.fones.forEach(fone => console.log(fone));

console.log(cliente.fones[1]);