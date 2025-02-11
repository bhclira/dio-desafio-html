const pessoa = {
    nome: 'Lucas',
    idade: 23,
    peso: 80
}

// explicita
function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

// indiretamente
gritar.apply(pessoa, ['Olaaaa']);
gritar.call(pessoa, 'Olaaaa');

// operador new
const pessoa2 = new Object();

