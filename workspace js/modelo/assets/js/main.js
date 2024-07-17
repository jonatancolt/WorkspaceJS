const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
console.log('evento previnido');
});


  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = number(inputPeso.value);
  const altura = number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura){
    setResultado('Altura inválida', false);
    return;
  }
  
const imc = getImc(peso, altura);

console.log('cheguei aqui...');

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}


function criaP() {
  const p = document.createElement('p');
  return p; 
}

function setResultado(msg, isValid
) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);

}