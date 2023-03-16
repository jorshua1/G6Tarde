/* Hacemos un codigo de bucle infinito que llena la memoria y jode el pc si deja
que se coma toda la ram*/
let num=1;
while(num>0){
console.log("hola")
}

/*muy importante siempre cerrar el ciclo con un break */
let numero=1
while(numero<10){
    console.log("hola")
    break;
}
/*ejercico que propuso camila
haga un algoritmo que me imprima las tablas de multiplicar según el numero que ingrese*/

let number=parseInt(prompt("ingrese un numero entero"));
let hastael10=1;
while(isNaN(number)||number<=0){
    console.log("error");
    break;
}
while(hastael10<11){
    console.log(number*hastael10)
    hastael10++
}

//prueba de for
let i=0
let c=parseInt(prompt("ingrese un numero"))
while(isNaN(c)||c<=0){
    alert("ingrese un hpta valor valido")
}
for(i ;i<=10;i++){
    console.log(i*c)
}
// ejercicio for