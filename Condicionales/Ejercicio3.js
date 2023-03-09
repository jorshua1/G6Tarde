/**Algoritmo que a partir de dos números y través de un menú, permita al usuario seleccionar la
acción a realizar entre sumarlos, restarlos, multiplicarlos o dividirlos. */

let numero1=Number(prompt("Ingrese un numero"));
let numero2=Number(prompt("Ingrese otro numero"));

alert("Digite: 1. Para sumar, 2. Para multiplicar,  3. Para restar");
let digitar=Number(prompt());

if (isNaN(numero1) || isNaN(numero2) || digitar>3){
    alert("ERROR. Ingrese un dato válido.  ")
}else if( digitar ===1){
    let suma;
    suma= numero1+numero2;
    alert("La suma es "+ suma);
}else if( digitar===2){
    let multiplicar;
    multiplicar= numero1*numero2;
    alert("La multiplicacion es "+ multiplicar);
}else {
    let restar;
    restar= numero1-numero2;
    alert("La resta es "+restar);
}