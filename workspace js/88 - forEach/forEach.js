
/* MÉTODO SEM ARROW FUNCTION
const a1 = [ 10, 20, 30, 40, 50, 60, 70, 80, 90];
a1.forEach(function(valor, indice, array) {
    console.log(valor);
})*/

/* COM ARROW FUNCTION
const a1 = [ 10, 20, 30, 40, 50, 60, 70, 80, 90];
a1.forEach(valor => console.log(valor));*/

//SOMA DOS TOTAIS USANDO FOREACH
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;
a1.forEach(valor => {
total += valor;
});
console.log(total);

