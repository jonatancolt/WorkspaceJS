// filter --> sempre retorna um array, com a mesma quantidade de elementos ou menos.

//retorne os números maiores que 10 --->


//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//function callbackFilter(valor, indice, array) {
 //   if (valor > 10) {
  //      return true;
   // } else {
  //      return false;
  //  }
//}
//const numerosFiltrados = numeros.filter(callbackFilter);
//console.log(numerosFiltrados)





//outro método parecido sem o if e else  --->
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//function callbackFilter(valor, indice, array) {
  //  return valor > 10
//}
//const numerosFiltrados = numeros.filter(callbackFilter);
//console.log(numerosFiltrados)




//método usado por muitos mais simplificado possível --->
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const numerosFiltrados = numeros.filter(function(valor){
  //  return valor > 10;
//})
//console.log(numerosFiltrados)




//arrow function mais simples ainda --->
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);





//RETORNE AS PESSOAS QUE TEM O NOME COM 5 LETRAS ou mais
//RETORNEAS PESSOAS COM MAIS DE 50 ANOS
//RETORNE AS PESSOAS CUJO NOME TERMINA COM "A".

/*const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'kawan', idade: 32},
    {nome: 'wallace', idade: 47},
];
    const pessoasComNomeGrande = pessoas.filter(function(obj) {
    console.log(obj.nome);
}); */



/*const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'kawan', idade: 32},
    {nome: 'wallace', idade: 47},
];
    const pessoasComNomeGrande = pessoas.filter(function(obj) {
    return obj.nome.length >= 6;
});
console.log(pessoasComNomeGrande)
*/





//arrow function --->
/*const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'kawan', idade: 32},
    {nome: 'wallace', idade: 47},
];
    const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
console.log(pessoasComNomeGrande)*/





const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'kawana', idade: 32},
    {nome: 'wallace', idade: 47},
];
    const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5); 
    const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50); 
    const nomeTerminaComA = pessoas.filter(function(obj) {
        return obj.nome.toLowerCase().endsWith('a');
    })
console.log(nomeTerminaComA)

