<button>Presióname</button>

const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('¿Cuál es tu nombre?');
  alert('¡Hola ' + name + ', encantado de verte!');
}