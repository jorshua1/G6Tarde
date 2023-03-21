let numeros = 0;
let datos = 0;
let multiplicaciones = "";

for(datos;datos<5;datos++){
    numeros = Number(prompt("Ingrese un número"));
    multiplicaciones = multiplicaciones + numeros + " x " + "3 = " + (numeros*3) + "\n"
}
alert(multiplicaciones);



