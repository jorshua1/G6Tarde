let precio=Number(prompt("Ingrese precio de los conejos"));
let x=Number(prompt("Ingrese numero de conejos blancos que va a comprar"));
let y=Number(prompt("Ingrese numero de conejos negros que va a comprar"));
//punto a 
let total=x+y;
alert("total de conejos vendidos: " + total)
//punto b 
let p1 = precio*x;
let p2 = precio*y;
let totalV=p1+p2;
alert("Monto total de la venta: " + totalV)
if(x>y){
    alert("Se vendieron mas conejos blancos")
}else{
    alert("Se vendieron mas conejos negros")
}