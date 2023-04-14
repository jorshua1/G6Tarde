function validador(numero) {

    if(isNaN(numero)){

        return "Porfavor ingrese un numero"
        
    }else{

        return numero 

    }
    
}

nombre=parseInt(prompt("porfavor ingrese un numero"))
console.log(validador(nombre))


/////////////////////////////////////////////////////////////////

function validador(numero) {

    if(numero % 2 == 0){

        return "el numero ingresado es par"
        
    }else{

        return "el numero ingresado es impar" 

    }
    
}

numero=parseInt(prompt("porfavor ingrese un numero"))
console.log(validador(numero))


////////////////////////////////////////////////////////////////

function verificarNumero(numero){

    resultado=(numero === 0)?"su numero es cero": numero>0 ? "su numero es positivo":  "su numero es negativo"
    console.log(resultado)
}
numero=parseInt(prompt("porfavor ingrese un numero"))
console.log(verificarNumero(numero))


////////////////////////////////////////////////////////////////////

function escalera(numero){

    resultado=numero===0?"no es posible hacer la escalera con el numero cero (0)":numero>0?"su numero es positivo":"su numero es negativo"
    console.log(resultado)

    if(numero==0){
        console.log("su escalera es: ")
        console.log(0)

    }else if(numero >0){
        console.log("su escalera es: ")
        for (let i = 1; i <= numero; i++) {
            console.log(i)
        }
    }else{
        console.log("su escalera es: ")
        for (let i = 1; i >= numero; i--) {
            console.log(i)
        }
    }
}

numero=parseInt(prompt("porfavor ingrese un numero"))
console.log(escalera(numero))


//////////////////////////////////////////////////////////////////////////

function escalera(numero){
    if(numero% 3 === 0){
        console.log("fizz") 
    }else if(numero % 5 === 0){
        console.log("buzz")

    }
    
    
    if(numero<0){
        console.log("su escalera es: ")
        for (let i = 1; i >= numero; i--) {
            console.log(i)
        }
    }else{
        console.log("su escalera es: ")
        for (let i = 1; i <= numero; i++) {
            console.log(i)
        }
    }
}

numero=parseInt(prompt("porfavor ingrese un numero"))
console.log(escalera(numero))



///////////////////////////////////////////////////////////
function fizzBuzz(n) {
    if (n <= 0) {
      console.log("Error numero negativo o cero");
    } else {
      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
    }
  }
  
  var n = parseInt(prompt("numero"));
  console.log(fizzBuzz(n));