let num=parseInt(prompt("porfavor dijite un numero para determinar si es palindromo"))

while(isNaN(num) || num<0){

    num=parseInt(prompt("porfavor dijite un numero para determinar si es palindromo"))

}

let numero=10
if(numero<=10){

    let numero="15"

}
console.log(numero)


//pida un numero al usuario, 
//seguido debe determinar si este numero es par o impar, 
//si es par, debe mostar en pantalla todos sus multiplos hasta llegar a 0, si es impar, debe sumar su factorial
// y mostrarlo en pantalla, hacer todas sus validacciones posibles sin que el programa cierre(while)


let num=parseInt(prompt("porfavor dijite un numero"))
while(isNaN(num) || num<0){
    num=parseInt(prompt("porfavor dijite un numero valido"))
}

if(num %2 == 0){
    for (i = num; i >=0; i--) {
        
     if(num %i ==0 ){

        guardar=i
        console.log("el numero "+guardar+""+" es multiplo de "+num)
     }        
    }
}else{
    sumador=0
   for (i = num; i >=0; i--) {
    sumador=sumador+i
    console.log(i)
    }
console.log("la suma de factorial es "+sumador)
}


//Calcula la suma de los cuadrados de los 100 primeros números naturales

suma=0
sumtotal=0
for (i = 0; i < 100; i++) {
suma=i*i
console.log(suma)
sumtotal=sumtotal+suma 
}
console.log("la suma de los numeros naturales al cuadrado es :"+sumtotal)

//calcular la suma de los números enteros del 1 al 10
suma=0
sumtotal=0

for (i = 0; i < 10; i++) {
suma=i
console.log(suma)
sumtotal=sumtotal+suma 
}
console.log("la suma de los numeros naturales hasta el 10 es :"+sumtotal)



//En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y
// el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como 
//resto 2.
//Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.


numeroMaximo = parseInt(prompt("Ingrese un número máximo "));

while(isNaN(numeroMaximo) || numeroMaximo <= 0){
    numeroMaximo = parseInt(prompt("Por favor ingrese datos validos  "));
}

for (control = 0; control < numeroMaximo; control++)
{
    if( control % 3 == 2){
        console.log(control);
    }
}

//Calcular el factorial de un número x

numeroMaximo = parseInt(prompt("Ingrese su numero a calcular el factorial"));

while(isNaN(numeroMaximo) || numeroMaximo <= 0){
    numeroMaximo = parseInt(prompt("Por favor ingrese datos validos  "));
}

for (i = numeroMaximo; i >= 0; i--)
{
    console.log(i);
}

//Crea una aplicación que permita adivinar un número. La aplicación genera un número aleatorio 
//del 1 al 100. A continuación va pidiendo números y va respondiendo si el número a adivinar es
//mayor o menor que el introducido, a demás de los intentos que te quedan (tienes 10 intentos 
//para acertarlo). 
//El programa termina cuando se acierta el número
//(además te dice en cuantos intentos lo has acertado), 
//si se llega al limite de intentos te muestra el número que había generado.

num=Math.floor(Math.random()*100)
console.log(num)

intentos=0

if(num>0 && num <=10){
    console.log("intente adivinar el numero que esta entre 1 y 10");
}else if(num>10 && num <=20){
    console.log("intente adivinar el numero que esta entre 11 y 20");
}else if(num>20 && num <=30){
    console.log("intente adivinar el numero que esta entre 21 y 30");   
}else if(num>30 && num <=40){
    console.log("intente adivinar el numero que esta entre 31 y 40");   
}else if(num>40 && num <=50){
    console.log("intente adivinar el numero que esta entre 41 y 50");   
}else if(num>50 && num <=60){
    console.log("intente adivinar el numero que esta entre 51 y 60");   
}else if(num>60 && num <=70){
    console.log("intente adivinar el numero que esta entre 61 y 70");   
}else if(num>70 && num <=80){
    console.log("intente adivinar el numero que esta entre 71 y 80");   
}else if(num>80 && num <=90){
    console.log("intente adivinar el numero que esta entre 81 y 90");   
}else if(num>90 && num <=100){
    console.log("intente adivinar el numero que esta entre 91 y 100");   
}
var valor=parseInt(prompt("valor"))
while(isNaN(valor) || valor <=0 && valor<100){
    valor=parseInt(prompt("porfavor dijite un valor valido que sea numerico comprendido entre 0 y 100: "))
}
if(valor==num){
    console.log("ud ha ganado");
}else{
    while(intentos<3){
        console.log("Intento"+(intentos+1)+" de 3");
        console.log("porfavor vuelva a intntarlo: ")
        valor=parseInt(prompt("valor"))
        while(isNaN(valor) || valor <=0 && valor<100){
            valor=parseInt(prompt("porfavor dijite un valor valido que sea numerico comprendido entre 0 y 100: "))
        }
        intentos++
    }
    console.log("Numero de intentos agotado")
}

//Mostrar en pantalla los N primero número primos. Se pide por teclado la cantidad 
//de números primos que queremos mostrar.
 
var numero= parseInt(prompt("dijite el numero para mostrar sus primos"))
for(i=0; i<=numero; i++){
    
   if(i % 2 === 0 || i%3 === 0 || i % 5 === 0 || i % 7 === 0 || i%11 === 0){
       if(i === 2|| i===3 || i ===5 || i===7 || i===11){
           console.log(i)
       }
    }
    else{
        console.log(i)
    }
}

//////////////////////////////////////////////////////////////////(4)
var numero= parseInt(prompt("dijite el numero para mostrar sus primos"))
for(i=0; i<=numero; i++){
    
   if(i % 2 !== 0 ){
    console.log(i)
       }
    }

//////////////////////////////////////////////////////////////////(5)
art1=prompt("dijite el nombre del articulo 1")
valor1=parseInt(prompt("dijite el valor del articulo 1"))
while(isNaN(valor1)||valor1<=0){
    valor1=parseInt(prompt("dijite un valor valido para el articulo 1")) 
}

art2=prompt("dijite el nombre del articulo 2")
valor2=parseInt(prompt("dijite el valor del articulo 2"))
while(isNaN(valor2)||valor2<=0){
    valor2=parseInt(prompt("dijite un valor valido para el articulo 1")) 
}

art3=prompt("dijite el nombre del articulo 3")
valor3=parseInt(prompt("dijite el valor del articulo 3"))
while(isNaN(valor3)||valor3<=0){
    valor3=parseInt(prompt("dijite un valor valido para el articulo 1")) 
}

art4=prompt("dijite el nombre del articulo 4")
valor4=parseInt(prompt("dijite el valor del articulo 4"))
while(isNaN(valor4)||valor4<=0){
    valor4=parseInt(prompt("dijite un valor valido para el articulo 1")) 
}

clave=parseInt(prompt("como desea pagar (1--->debito o 2--->credito)"))

while(isNaN(clave)){
        clave=parseInt(prompt("dijite una clave valida (1--->debito o 2--->credito)"))
    }

if (clave !== 1 || clave !==2){
    while(clave !== 1 && clave !==2){
        clave=parseInt(prompt("dijite una clave valida (1--->debito o 2--->credito)"))
    }
}

    totalNeto= valor1+valor2+valor3+valor4
    dc1=totalNeto*(10/100)
    dc2=totalNeto*(20/100)
    console.log(dc1)
    console.log(dc2)
       
    if(clave ===1){
        dcto1=valor1*(10/100)
        dcto2=valor2*(10/100)
        dcto3=valor3*(10/100)
        dcto4=valor4*(10/100)
        total1=dcto1+dcto2+dcto3+dcto4
        total=totalNeto-total1
    
        console.log("articolo: "+art1+"---> "+valor1+"---> descuento: "+dcto1)
        console.log("articolo: "+art1+"---> "+valor2+"---> descuento: "+dcto2)
        console.log("articolo: "+art1+"---> "+valor3+"---> descuento: "+dcto3)
        console.log("articolo: "+art1+"---> "+valor4+"---> descuento: "+dcto4)
        console.log("Tiene un dcto cel 10% por pagar con metodo debito para cada articulo")
        console.log("Total a pagar: "+total);
     
    }else if(clave ===2){
        dcto1=valor1*(20/100)
        dcto2=valor2*(20/100)
        dcto3=valor3*(20/100)
        dcto4=valor4*(20/100)
        total1=dcto1+dcto2+dcto3+dcto4
        total=totalNeto-total1
    
        console.log("articolo: "+art1+"---> "+valor1+"---> descuento: "+dcto1)
        console.log("articolo: "+art1+"---> "+valor2+"---> descuento: "+dcto2)
        console.log("articolo: "+art1+"---> "+valor3+"---> descuento: "+dcto3)
        console.log("articolo: "+art1+"---> "+valor4+"---> descuento: "+dcto4)
        console.log("Tiene un dcto cel 20% por pagar con metodo credito para cada articulo")
        console.log("Total a pagar: "+total);
    }

    /////////////////////////////////////////////////////////////(6)






























