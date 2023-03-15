let acumulador = 1;
let resultado;
let tabla;
let numero = parseInt(prompt("por favor ingresar el numero al cual deseas conusltar la tabla"));

if(!isNaN(numero) >0){
    while(acumulador<=10){
        resultado = acumulador * numero;
        tabla+=("\n"+acumulador+" x "+numero+" = "+resultado); 
        acumulador++
    }
    alert(tabla);
}else{
    alert("ingrese un valor valido");
}