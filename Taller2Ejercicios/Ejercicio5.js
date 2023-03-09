let convendiblancos = parseInt(prompt("Ingrese la cantidad de conejos blancos vendidos"));
let convendinegros = parseInt(prompt("Ingrese la la cantidad de conejos negros vendidos"));
let sumaconejos = convendiblancos+convendinegros;
let precioblancos = parseInt(prompt("Ingrese el precio de los conejos blancos"));
let precionegros = parseInt(prompt("Ingrese el precio de los conejos negros"));
let pretotalblancos = convendiblancos * precioblancos;
let pretotalnegros = convendinegros * precionegros;
let totalcompra = pretotalblancos + pretotalnegros;
if(isNaN(convendiblancos)||convendiblancos<0){
    console.log("Dato invalido")
}
else if(isNaN(convendinegros)||convendinegros<0){
    console.log("Dato invalido")
}
else if(convendiblancos>convendinegros){
    console.log("El color de conejos mas vendido es el BLANCO")
}
else{
    console.log("El color de conejos mas vendido es el NEGRO")
}
console.log("La cantidad de conejos vendida es", sumaconejos);
console.log("El monto total de su compra es de", totalcompra);
