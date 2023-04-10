var numero1 = Number(prompt("Ingrese el primer numero"));
while (numero1 < 0 || isNaN(numero1)){
    alert("La informacion que ingreso es incorrecta, escriba un numero positivo");
    numero1 = Number(prompt("Ingrese el primer numero"));
}
var numero2 = Number(prompt("Ingrese el segundo numero"));
while (numero2 < 0 || isNaN(numero2)){
    alert("La informacion que ingreso es incorrecta, escriba un numero positivo");
    numero2 = Number(prompt("Ingrese el segundo numero"));
}
var numero3 = Number(prompt("Ingrese el tercer numero"));
while (numero3 < 0 || isNaN(numero3)){
    alert("La informacion que ingreso es incorrecta, escriba un numero positivo");
    numero3 = Number(prompt("Ingrese el tercer numero"));
}
var numero4 = Number(prompt("Ingrese el cuarto numero"));
while (numero4 < 0 || isNaN(numero4)){
    alert("La informacion que ingreso es incorrecta, escriba un numero positivo");
    numero4 = Number(prompt("Ingrese el cuarto numero"));
}
var numero5 = Number(prompt("Ingrese el quinto numero"));
while (numero5 < 0 || isNaN(numero5)){
    alert("La informacion que ingreso es incorrecta, escriba un numero positivo");
    numero5 = Number(prompt("Ingrese el quinto numero"));
}

let resultado1 = (numero1*3);
let resultado2 = (numero2*3);
let resultado3 = (numero3*3);
let resultado4 = (numero4*3);
let resultado5 = (numero5*3);

alert("\n" + numero1 + "x" + "3" + "="+ resultado1 + "\n" + numero2 + "x" + "3" + "="+ resultado2 + "\n" + numero3 + "x" + "3" + "="+ resultado3 + "\n" + numero4 + "x" + "3" + "="+ resultado4 + "\n" + numero5 + "x" + "3" + "="+ resultado5);


