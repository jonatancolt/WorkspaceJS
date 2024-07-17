//dobre os numeros

/*forma mais complexa
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor, indice) {
    return valor * 2;
});
console.log(numerosEmDobro)*/



//forma mais usada (arrow function) --->

/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro)*/


/*FORMA MAIS COMPLEXA --->
const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];
const nomes = pessoas.map(function(valor) {
    return valor.nome;
});
console.log(nomes);*/


/*ARROW FUNCTION --->
const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade }));


console.log(idades);*/

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];


const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade }));
const comIds = pessoas.map(function(obj, indice) {
     obj.id = (indice + 1) * 1000;
     return obj;
});

console.log(comIds);


//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto ()

