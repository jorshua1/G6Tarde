/*Programa que determina si un año es bisiesto o no */
let año = parseInt(prompt("Ingrese el año"))

if (isNaN(año)){
        alert("Ingrese un dato valido")
}else if ((año % 4 == 0) && ((año % 100 != 0) || (año % 400 == 0))){
	alert("El año es bisiesto");
}else
	alert("El año no es bisiesto");