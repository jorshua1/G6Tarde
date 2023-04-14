//////////////////////////////////////////////////////////////

// Punto 11
//let pedirnumeros = Number(prompt("Ingrese el numero a calcular si es par o impar"));
//function pareimpar(numero) {
  //  if (isNaN(numero) || numero < 0) {
  //      return "ERROR, el dato ingresado no es número"
  //  } else if (numero % 2 === 1) {
  //      return numero + " Es un número impar"
  //  } else {
   //     return numero + " Es un número par"
   // }
//}
//alert(pareimpar(pedirnumeros));
//////////////////////////////////////////////////

// Punto 12. Escribir una función en JavaScript que tome como parámetro un número y devuelva "Positivo" si el número es mayor que cero, "Negativo" si el número es menor que cero y "Cero" si el número es cero.

let ingresarNumero = (-1);
function positivosNegativos(valor) {
    if (isNaN(ingresarNumero)) {
        return "ERROR, el dato ingresado no es número";
    }else{
        return ingresarNumero < 0 ? " El numero es Negativo" : "El numero es Positivo"
    }
}
console.log(positivosNegativos(ingresarNumero));

// Punto 13. 13.	Escribir una función en JavaScript que tome como parámetro un número y muestre por consola los números del 1 al número ingresado.

let ingresarvalores = (5);

function calculadoraNumeros (valores){
    console.log(ingresarNumero < 0 ? " El numero es Negativo" : "El numero es Positivo") 
    if (ingresarvalores>0){
        for(let i = 0;i<ingresarvalores;i++){
            i++
            return console.log(i);
        }
    }
}
console.log(calculadoraNumeros(ingresarvalores));