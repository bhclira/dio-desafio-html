// First Class Functions
// Higher Order Functions

function falarMeuNome() {
    console.log('Meu nome é Breno');
}

const referenciaNova = falarMeuNome;

referenciaNova();

function falarMeuNomeCompleto (falarMeuNome) {
    falarMeuNome();
    console.log('Meu sobrenome é Silva');
}

falarMeuNomeCompleto(falarMeuNome);


function nomeDaFuncao() {
    console.log('Função executada');
}

const nomeDeOutraFuncao = function () {
    console.log('Função executada');
}

nomeDaFuncao();
nomeDeOutraFuncao();

