var lista_frutas = [];

lista_frutas[0] = 'banana';
lista_frutas[1] = 'maça';
lista_frutas[2] = 'morango';
lista_frutas[3] = 'uva';

console.log(lista_frutas.sort());

var lista_numeros = [12,40,3,7,19,1];

console.log(lista_numeros.sort(ordenaNumeros));

function ordenaNumeros(a, b) {
    return a - b;
}