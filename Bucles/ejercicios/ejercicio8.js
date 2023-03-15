//En script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.

let letra, repeticiones, contador, veces='';

letra = prompt("Escriba una letra");

repeticiones= parseInt(prompt("Escriba numero"));

for(contador = 0; contador < repeticiones; contador++){

  veces += letra;

}

alert(veces);