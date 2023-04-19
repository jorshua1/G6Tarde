do{
    let numero, suma = 0,repetir;
    let vector = [];
    for (let i = 0; i < 10; i++) {
        numero = parseInt(prompt("por favor ingresar el numero "+ (i+1) + " a sumar"));
        while(isNaN(numero)){
            alert("error, el valor ingresado no es un numero");
            numero = parseInt(prompt("por favor ingresar el numero "+ (i+1) + " a sumar"));
        }
        vector[i]=numero;
        suma = suma + numero;
        console.log(vector[i]);
    }
    console.log("la suma de todos los numeros ingresados es:"+suma);
    repetir = parseInt(prompt("0 para iniciar nuevamente \notro numero para salir"));
}while(repetir==0);
alert("fin del programa");
