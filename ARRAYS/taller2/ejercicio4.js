let numeros=[];
let numero=0;
for(let i=0; i<10;i++){
      numero=Number(prompt("Ingrese un numero (si ingresa un negativo el programa se cerrara)"))
      while(isNaN(numero)){
        alert("Error, ingrese un dato valido")
        numero=Number(prompt("Ingrese un numero"))
      }
      numeros[i]=numero
      if(numero<0){
        break;
      }
}
alert("Lista de numeros: " + numeros)