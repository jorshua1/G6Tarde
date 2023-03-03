if(condicion){
    //codigo a ejecutar si es verdadero
}else{
    //codigo a ejecutar si es falso
}


let edad=Number(prompt("Ingrese su edad"));
if (edad>=0) {
    if(edad>=18){
        alert("Es mayor de edad")
}   else{
        alert("Es menor de edad")
}
}else{
    alert("Ingrese un valor valido")
}

//edad con isNaN
let edad2=Number(prompt("Ingrese su edad"));
if(isNaN(edad2) || edad2<=0){
    alert("Ingrese un valor valido")
}else if (edad2>=1 && edad2>=18){
    alert("Es mayor de edad")
}else{
    alert("Es menor de edad")
}

//ejercicio 2
let numero=Number(prompt("Ingrese un numero"));
if(numero%2==0){
    alert("Es un numero par")
}else{
    alert("Es un numero impar")
}

//ejercicio propuesto mio
let vVenta=Number(prompt("Ingrese valor venta"));
if(isNaN(vVenta) || vVenta<=0){
    alert("ERROR: Ingrese un dato valido")
}else if(vVenta>=250000){
    let precio1= vVenta - (vVenta*0.3)
    alert("Su descuento fue del 30%")
    alert("Total a pagar:"+precio1)
}else if(vVenta<250000 && vVenta>=200000){
    let precio2= vVenta - (vVenta*0.2)
    alert("Su descuento fue del 20%")
    alert("Total a pagar:"+precio2)
}else if(vVenta<200000 && vVenta>=50000){
    alert("Su compra no tiene descuento")
    alert("Total a pagar:"+vVenta)
}else if(vVenta<50000){
    let precio3= vVenta+2000
    alert("Su compra no tiene descuento")
    alert("Total a pagar:"+precio3)
}

//EJERCICIO ESTACIONES
let mes=Number(prompt("Ingrse numero del mes"));
if(mes == 12 || mes==1  || mes==2){
    estacion="Invierno"
}else if(mes==3 || mes==4 || mes==5){
    estacion="Primavera"
}else if(mes==6 || mes==7 || mes==8){
    estacion="Verano"
}else if(mes==9 || mes==10 || mes==11){
    estacion="Otoño"
}else{
    alert("Ingrese un numero valido")
}
if(mes>=1 && mes<=12){
    alert("La estacion es:"+estacion)
}

//ejercicio compañeros 1
let diametro=Number(prompt("Ingrese diametro de la rueda"));
if(isNaN(diametro)){
    alert("Ingrese un valor valido")
}else if(diametro>1.4){
    alert("La rueda es para un vehiculo grande")
}else if(diametro<=1.4 && diametro>0.8){
    alert("La rueda es para un vehiculo mediano")
}else{
    alert("La rueda es para un vehiculo pequeño")
}

//ejercicio compañeros 2
let año=Number(prompt("Ingrese año"));
if(año%4==0 && año%100==0 && año%400==0){
    alert("Es bisciesto")
}else if(año%100==0 && año%400!==0){
    alert("No es bisciesto")
}