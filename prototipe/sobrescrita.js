// Definindo um objeto 'pessoa' com uma propriedade 'idade'
const pessoa = {
    idade: 18
}

// Definindo um objeto 'renan' com propriedades 'nome' e 'idade'
// e configurando seu protótipo (__proto__) para herdar de 'pessoa'
const renan = {
    nome: 'Renan',
    idade: 20, // Esta propriedade 'idade' sobrescreve a propriedade 'idade' herdada de 'pessoa'
    __proto__: pessoa
}

// Exibindo a propriedade 'idade' do objeto 'renan' no console
// Como 'renan' tem sua própria propriedade 'idade', ela será usada em vez da propriedade herdada de 'pessoa'
console.log(renan.idade); // Output: 20