
/*  SOME TODOS OS NUMEROS (REDUCE)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
   acumulador += valor;
  
    return acumulador;
}, 0);
console.log(total);

NESSE EXEMPLO, PODEMOS FAZER SOMA DE TOTAL DE NUMEROS USANDO A FUNÇÃO REDUCE, QUE IRÁ REDUZIR O TRABALHO DE SOMAR O CÓDIGO INTEIRO COM NUMEROS (EX ACIMA)*/



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  if(valor % 2 === 0){ acumulador.push(valor);
  acumulador += valor;}

  return acumulador;
},);
console.log(total);