// Definindo um objeto 'pessoa' com uma propriedade 'genero'
const pessoa = {
    genero: 'Masculino'
}

// Definindo um objeto 'breno' com propriedades 'nome' e 'idade'
// e configurando seu protótipo (__proto__) para herdar de 'pessoa'
const breno = {
    nome: Breno, // Isso causará um erro porque 'Breno' não está entre aspas
    idade: 18,
    __proto__: pessoa
}

// Alterando a propriedade 'genero' do objeto 'pessoa'
pessoa.genero = 'Masculino'

// Exibindo o objeto 'pessoa' no console
console.log(pessoa)
