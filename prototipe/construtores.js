// funções construtoras do JS sempre iniciam letra maiuscula

// Definindo uma função construtora 'Pessoa' que inicializa as propriedades 'nome' e 'idade'
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Adicionando um método 'falar' ao protótipo de 'Pessoa'
// Isso significa que todas as instâncias de 'Pessoa' terão acesso a este método
Pessoa.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

// Criando uma nova instância de 'Pessoa' chamada 'breno' com nome 'Breno' e idade 30
const breno = new Pessoa('Breno', 30);

// Chamando o método 'falar' na instância 'breno'
breno.falar(); // Output: "Breno está falando"


// outra sintaxe função construtorav + usual
class Pessoa {
    constructor (nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar () {
        console.log(`${this.nome} está falando`);
    }
}