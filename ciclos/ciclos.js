//ciclo while
let numero = 1
while(numero<=10){
    console.log(numero)
    numero++
}
console.log("XD");

//ciclo do while
let numero2=0
do{
alert(numero2)
numero2++
}while(numero2<=10)
console.log("XD")

//ejercicio1 con if
let number=Number(prompt("Ingrese tabla de multiplicar que desea ver"));
numero=1
if (isNaN(number) || number<0){
    alert("Error")
}else{
    do{
        let multiplicacion=number*numero
        alert(number + "*"+ numero + "=" + multiplicacion)
        numero++
    }while(numero<=10)
}

//ejercio1 pero con dos whiles
//let multiplicacion;
//let number=Number(prompt("Ingrese tabla de multiplicar que desea ver"));
//let numero=1
//while(isNaN(number) || number<0){
 //   alert("Error")
 //   number=Number(prompt("Ingrese un numero valido"));
//}    do{
//    multiplicacion=number*numero
 //   console.log(number + "*"+ numero + "=" + multiplicacion)
 //   numero++
//}while(numero<=10)

//for 
for(i=0;i<=10;i++){
    console.log(i)
}

//ejercicio1 con for
//let number=Number(prompt("Ingrese tabla de multiplicar que desea ver"));
//while(isNaN(number) || number<0){
//    alert("Error")
 //   number=Number(prompt("Ingrese un dato valido"));
//}
//for(let i=1;i<=10;i++){
//    let multiplicacion= number*i
//    alert(number + "*" + i + "=" + multiplicacion)
//}