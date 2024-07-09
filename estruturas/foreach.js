let listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Luca', 'Fernanda'];
console.log(listaFuncionarios);

listaFuncionarios.forEach(function(valor, indice, array) {
    console.log('indice ' + indice + ' = ' + valor + ' do Vetor = ' + array);
});