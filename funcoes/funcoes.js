function soma(a, b) {
    return a + b;
}
console.log(soma(7,5));
console.log('------');

function novaSoma () {
    let resultado = 0;
    for (let i in arguments) {
        resultado += arguments[i];
    }
    return resultado;
}

console.log(novaSoma(7, 5, 3.2, 4.8));