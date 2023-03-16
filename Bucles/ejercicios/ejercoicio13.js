//correccion, pq jorshua mucho molestar alv: pida un numero al usuario, seguido debe determinar si este numero es par o impar, si es par, debe mostar en pantalla todos sus multiplos hasta llegar a 0, si es impar, debe sumar su factorial y mostrarlo en pantalla, hacer todas sus validacciones posibles sin que el programa cierre(while)


var numero = Number(prompt("Ingrese un numero"));
var i = parseInt 
var multiplos = parseInt 
var factorial = parseInt
factorial = 1
multiplos = 0 
if (numero%2===0){
    alert("El numero es par")
    for (i = numero; i >= 0; i--){
        multiplos = i*numero
        console.log("Los multiplos del"+" "+ + numero + " = " + multiplos)
    }

}else if (numero%2===1){
    alert("El numero es impar");
    for(var k = 1; k <= numero; k++){
         factorial = factorial* k
    console.log(factorial)
}
//console.log("factorial es = " + factorial)
}else {
    alert ("error")
}
        


