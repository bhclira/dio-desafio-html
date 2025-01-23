String.prototype.toUpperCase = function() {
    return this.split('').map((letter) => {
        return letter.toUpperCase();
    }).join('');
}