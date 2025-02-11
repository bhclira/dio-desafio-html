function soma(x) {
    return function(y) {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(somaParcial(5));
console.log(somaParcial(15));
console.log(somaParcial(30));
