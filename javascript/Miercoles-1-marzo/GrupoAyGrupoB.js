const condicion1 = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","A","B","C","D","E","F","G","H","I","J","K","L","M"];
const condicion2 = [ "n","o","p","q","r","s","t","u","v","w","x","y","z","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let nombre = prompt("Nombre: ");
let sexo = prompt("Sexo: ");
let primeraletra = nombre.substring(0,1);
console.log(primeraletra.includes["a"-"z"]);

if (condicion1.includes(primeraletra) && (sexo.substring(0,1)==="m" || sexo.substring(0,1)==="M")) {
    alert("grupo A")
} else if (condicion2.includes(primeraletra) && (sexo.substring(0,1)==="h" || sexo.substring(0,1)==="H")) {
    alert("grupo A")
} else if (condicion1.includes(primeraletra) && (sexo.substring(0,1)==="h" || sexo.substring(0,1)==="H")) {
    alert("grupo B")
} else if (condicion2.includes(primeraletra) && (sexo.substring(0,1)==="m" || sexo.substring(0,1)==="M")) {
    alert("grupo B")
}

