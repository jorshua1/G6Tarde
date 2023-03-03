let vNumer = Number(prompt("Ingrese el numero"));

if (isNaN(vNumer)) {
    alert("Ingrese un número");
}
else if (vNumer % 2==0) {
    alert(vNumer + " Es un numero par");
}
else {
    alert(vNumer + "Es impar")
}

//--------------- Condicional
/*if (vGender = parseFloat(prompt(vGender))) {
    alert("Eso es un numero, no se valida la información");
}*/
let vGender = prompt("Ingrese su genero \n Solo son validos: Hombre, Mujer, Indefinido");


if (vGender == "Hombre" || vGender == "hombre") {
    alert("Eres Hombre");
}
else if (vGender == "Mujer" || vGender == "mujer") {
    alert("Eres Mujer");
}
else if (vGender == "Indefinido" || vGender == "indefinido") {
    alert("Eres Indefinido?");
}
else {
    alert("Debe ingesar un dato valido");
}
console.log(vGender);

//---------------------Ejercicio Altura-------------------------------------------------------------------------

let vAltura = parseFloat(prompt("ingrese su altura"));

if (isNaN(vAltura)) {
    alert("Ingrese una altura valida");
}
else if (vAltura > 3.1) {
    alert("Eso es muy alto socio");
}
else if (vAltura > 2.1) {
    alert("Sera que le creo sigue siendo muy alto");
}
else if (vAltura > 1.78) {
    alert("La altura para jugar basketball");
}
else if (vAltura > 1.6) {
    alert("Tiene una altura promedio");
}
else if (vAltura > 1.5) {
    alert("Le falta crecer XD");
}
else {
    alert("No le creo que mida eso")
}