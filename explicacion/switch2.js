let nombre = prompt("Ingrese su nombre");

saludo = nombre==="" || nombre ==="." || typeof nombre ==="Number"?
"ingrese un nombre valido" : nombre ==="jorshua"?
"Bienvenido" : "bienvenido invitado";
alert(saludo);

/*
let saludo = nombre ===""? "Ingrese un nombre valido" : "Hola"+nombre; 

console.log(saludo);*/
