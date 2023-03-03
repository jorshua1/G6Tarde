/*do{

    let edad = Number(prompt("Ingrese su edad"));

    if(isNaN(edad)){
        console.log("Error, no es un numero");
        alert("Error, no es un numero");
    }else if(edad>=1 && edad>=18){
        console.log("Es mayor de edad");
        alert("Es mayor de edad");
    }else if(edad>=1 && edad<=17){
        console.log("Es menor de edad");
        alert("Es menor de edad");
    }else {
        console.log("Ingrese un valor valido");
        alert("Ingrese un valor valido");
    }
    
    n = parseInt(prompt("si quieres probar de nuevo presiona 1, si quieres salir, presiona otro numero"));

}while(n=1);*/

let numero = Number(prompt("Digite un numero a verificar"));

if(numero % 2==0){

    alert("El numero es par");

}else{

    alert("El numero es impar");
    
}