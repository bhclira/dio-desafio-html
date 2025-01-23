// Definindo um objeto 'pessoa' com uma propriedade 'genero'
const pessoa = {
    genero: 'Masculino'
}

// Criando um novo objeto 'renan' que herda do objeto 'pessoa'
const renan = Object.create(pessoa)

// Adicionando uma nova propriedade 'nome' ao objeto 'renan'
renan.nome = 'Renan'

// Exibindo a propriedade 'genero' do objeto 'renan' no console
// Como 'renan' herda de 'pessoa', ele tem acesso à propriedade 'genero' de 'pessoa'
console.log(renan.genero) // Output: "Masculino"
