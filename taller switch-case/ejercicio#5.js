let cconejosblanco = parseInt(prompt("ingrese la cantidad de conejos blancos que vamos a tener en el stock"));
let precioccblanco = parseInt(prompt("ingrese el precio que vale 1 conejo blanco para la venta"));
let cconejosnegros = parseInt(prompt("ingrese la cantidad de conejos negros que vamos a tener en el stock"));
let precioccnegro = parseInt(prompt("ingrese el precio que vale 1 conejo negro para la venta"));
let totalconejos = (cconejosblanco + cconejosnegros);
let colorconejo = (prompt("Escoja el color del conejo que quiere comprar de primero \n Blanco = B \n Negro = N"));
let cantidadconejoscompradosblanco = Number();
let cantidadconejoscompradosnegro = Number();

if (isNaN(cconejosblanco) || isNaN(precioccblanco) || isNaN(cconejosnegros) || isNaN(precioccnegro)) {
    alert("ERROR, alguno de los dos datos ingresados no son numeros");
} else if ((colorconejo === "B" && cconejosblanco >= 1) || (colorconejo === "N" && cconejosnegros >= 1)) {
    cantidadconejoscompradosblanco = parseInt(prompt("¿Cuantos conejos color Blanco quieres comprar?"));
    cantidadconejoscompradosnegro = parseInt(prompt("¿Cuantos conejos color Negro quieres comprar?"));
    let unidadblanco = (precioccblanco * cantidadconejoscompradosblanco)
    let unidadnegro = (precioccnegro * cantidadconejoscompradosnegro)
    alert("El color de conejo que usted compro fue Blanco y la cantidad de conejos a comprar fueron: " + cantidadconejoscompradosblanco + " El total a pagar por sus conejos son: " + unidadblanco);
    alert("El color de conejo que usted compro fue Negro y la cantidad de conejos a comprar fueron: " + cantidadconejoscompradosnegro + " El total a pagar por sus conejos son: " + unidadnegro);
    if(cantidadconejoscompradosblanco>cantidadconejoscompradosnegro){
        alert("la cantidad de conejos mas vendido fue el color Blanco con el total de unidades de " + cantidadconejoscompradosblanco)
    }else{
        alert("la cantidad de conejos mas vendido fue el color Blanco con el total de unidades de " + cantidadconejoscompradosnegro)
    }
} else {
    alert("La cantidad de conejos o valores que ingreso es incorrecta, lea por favor de nuevo las instrucciones");
}