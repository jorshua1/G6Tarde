//------ OPERADOR TERNARIO -------------------

let vName = prompt("Ingrese un nombre");
let vHi = vName === "" ? "Ingrese un nombre valido" : "Hola " + vName;

alert(vHi)
console.log(vHi);
console.log(typeof(vHi));

//------------------------------------------------

vName === "" || vName === "." || typeof(vName === "Number") ? "Ingrese un nombre valido" : vName === "wilmer" ? "Bienvenido" : "Bienvenido Invitado";

alert(vName)

//==================================================================================================
{
let vNumber = Number(prompt("Ingrese el numero para saber si es mayor o menor"));

let vParImpar = vNumber % 2 === 0;

vParImpar ? "Si es par" + vParImpar: "No es par" + vParImpar;

alert("Es " + vParImpar);

console.log(vNumber);
}
//-------------------------------------------------------------------------------------------------
let vNumber = Number(prompt("Ingrese el numero para saber si es mayor o menor"));

let vParImpar = isNaN(vNumber) || vNumber % 2 === 0 ? "Es par" : "No es par";

console.log(vParImpar);

alert(vParImpar);
