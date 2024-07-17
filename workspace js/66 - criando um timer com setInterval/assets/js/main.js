
function criaHoraDosSegundos(segundos) 
const data = new Date(segundos 10000.);
return data.toLocaleTimeString('pt-BR', {
  hour12: false
});

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
  relogio.innerHTML = 'cliquei no iniciar';
});
pausar.addEventListener('click', function(event) {
  alert('cliquei no iniciar');
});
zerar.addEventListener('click', function(event) {
  alert('cliquei no iniciar');
});

