let p1 = Number(prompt("Ingrese el precio para cada conejo blanco"));
let p2 = Number(prompt("Ingrese el precio para cada conejo negro"));
let x = Number(prompt("Ingrese cuantos conejos blancos quiere comprar"));
let y = Number(prompt("Ingrese cuantos conejos negros quiere comprar"));
let total = (x*p1)+(y*p2);

x>y? alert( `En total se compraron ${x+y} conejos\n ${x} conejos blancos\n ${y} conejos negros\n Todo por un total de ${total} Se vendieron mas conejos blancos`) : 
alert(`En total se compraron ${x+y} conejos\n ${x} conejos blancos\n ${y} conejos negros\n Todo por un total de ${total} Se vendieron mas conejos Negros`) 