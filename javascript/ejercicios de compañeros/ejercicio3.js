/*Para tributar un determinado impuesto se debe ser mayor de 16 años y tener 
unos ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que 
pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si 
el usuario tiene que tributar o no.*/
let edad=Number(prompt("ingrese su edad"));
let ingresos=Number(prompt("digite sus ingresos mensuales"));
if(isNaN(edad || ingresos)){
    console.log("uno de los valores ingresados no es valido");
}
else if(edad>=16){
    if(ingresos=>1000){
        console.log("usted debe pagar impuestos")
    }
    else if(ingresos<1000){
        console.log("usted no debe pagar impuestos")
    }

}
else{
    console.log("usted no debe pagar impuestos")
}