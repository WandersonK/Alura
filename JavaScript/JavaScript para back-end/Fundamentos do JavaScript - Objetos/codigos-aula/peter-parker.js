const peterParker = {
    nome: "Peter Parker",
    profissao: "Fotógrafo Jornalista",
    heroi: "Homem Aranha",
    parentesco: "Tia May",
    genero: "Masculino",
    idade: 35
}

peterParker.cpf = "12345678999";

const chaves = ["nome", "profissao", "heroi", "parentesco", "idade", "genero", "cpf"];

chaves.forEach(info => console.log(peterParker[info]));
// console.log((chaves[0].substring(0, 1)).toUpperCase() + chaves[0].substring(1));