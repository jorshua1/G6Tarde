let cantidad=Number(prompt("ingrese la cantidad de conejos"))
let blanco=Number(prompt("ingrese la cantidad de conejos blancos"))
let negro=Number(prompt("ingrese la cantidad de conejos negros"))
let vblanco=Number(prompt("ingrese la cantidad de conejos blanco vendidos"))
let vnegro=Number(prompt("ingrese la cantidad de conejos negros vendidos"))
let pblanco=Number(prompt("ingrese el precio de los conejos blancos"))
let pnegro=Number(prompt("ingrese el precio de los conejos negros"))

if (vblanco<vnegro){
    console.log("se vendieron mas de los negros");
   }   else {
        console.log("se vendiron mas de los blancos");
    
}
console.log("los conejos vendidos fueron",  vblanco+vnegro);
console.log("el monto total de venta es ", (pblanco*vblanco)+(vnegro*pnegro));


