function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const breno = {
    genero: 'Masculino'
}

Pessoa.call(breno, 'Breno', 30);
/* 
const breno = new Pessoa('Breno', 30); */

renan.falar(); // Output: "Breno está falando"

console.log(breno); // Output: { genero: 'Masculino', nome: 'Breno', idade: 30 }
