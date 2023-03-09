//1
num1= parseInt(prompt("dijite el primer numero"))
num2= parseInt(prompt("dijite el segundo numero"))

if(isNaN(num1)||isNaN(num2)){
    console.log("dijite un numero valido")
}
else if(num1>num2){
    console.log(num2,num1)
}else{
    console.log(num1,num2)
}

//2
num= parseInt(prompt("dijite un numero entre 1 y 10"))

switch(num){
    case 1:
    case 5:
    case 3:
    case 7:
    case 9:
        console.log("impar")

    break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log("par")

    break;
    default:
        console.log("ingrese un numero valido entre 1 y 10")
    break
}

//3
num= parseInt(prompt("dijite un numero entre 1 y 10"))

switch(num){
    case 1:
        console.log("uno")
        break;
    case 2:
        console.log("dos")
        break;
    case 3:
        console.log("tres")
        break;
    case 4:
        console.log("cuatro")
        break;
    case 5:
        console.log("cinco")
    break;
    case 6:
        console.log("seis")
        break;
    case 7:
        console.log("siete")
        break;
    case 8:
        console.log("ocho")
        break;
    case 9:
        console.log("nueve")
        break;
    case 10:
        console.log("diex")
    break;
    default:
        console.log("ingrese un numero valido entre 1 y 10")
    break
}

//4
tiempo=parseInt(prompt("dijite el tiempo de la llamada"))

if(tiempo<=0 || isNaN(tiempo)) {

    console.log("dijite un tiempo valido")

}else  if(tiempo >0 && tiempo<=3){

    console.log("usted debera pagar 200 pesos")

}else{

    extra=tiempo-3
    total=extra*100
    totaldef=200+total
    console.log("el total a pagar es de " +totaldef +" pesos")
}

//5
Cne=parseInt(prompt("dijite el total de conejos negros vendidos"))
Cbl=parseInt(prompt("dijite el total de conejos blancos vendidos"))
p1=parseInt(prompt("dijite el valor de un conejo negro para  la venta"))
p2=parseInt(prompt("dijite el valor de un conejo blanco para  la venta"))


if (isNaN(Cne)|| isNaN(Cbl)|| Cne<=0 || Cbl<=0 ){

        console.log("dijite un numero valido")

}else if( isNaN(p1)|| isNaN(p2)|| p1<=0 || p2<=0 ){
 
    console.log("dijite un numero valido para el precio de venta")


}else if(Cne>0 && Cbl>0 && p1>0 && p2>0){

    ventatotal= Cne+Cbl;
    console.log("la cantidad total de conejos vendidos es: "+ventatotal)

    ventadinero= (p1*Cne)+(p2*Cbl)
    console.log("la cantidad total del monto de dinero de los conejos vendidos es: "+ventadinero)

}
if(Cne>Cbl){

    console.log("se vendieron mas conejos negros")

}else{

    console.log("se vendieron mas conejos blancos")

}


//6
console.log("porfavor dijite los 3 examenes");
ex1= parseFloat(prompt("dijite la nota 1"))
ex2= parseFloat(prompt("dijite la nota 2"))
ex3= parseFloat(prompt("dijite la nota 3"))

console.log("porfavor dijite los 2 trabajos");
tr1= parseFloat(prompt("dijite el trabajo 1"))
tr2= parseFloat(prompt("dijite el trabajo 2"))

if(ex1<0 || ex2<0 || ex3<0 || tr1<0 || tr2<0 ||ex1>5 || ex2>5 || ex3>5 || tr1>5 || tr2>5  || isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(tr1) || isNaN(tr2)){

    console.log("porfavor rectifique los datos ingresados")   

}else{
    notaex=((ex1+ex2+ex3)/3)*(60/100)
    notatr=((tr1+tr2)/2)*(40/100)
    console.log("exmenes: "+notaex)
    console.log("exmenes: "+notatr)

    if(notaex,notatr <1){
        notamin=1.0
        notaex,notatr=notamin;
    }

    notafi=notaex+notatr
    console.log("su nota final es: "+notafi)
}

//7
nombre=prompt("dijite el nombre del articulo")
clave=parseFloat(prompt("dijite la clave del articulo"))
precio=parseFloat(prompt("dijite el precio del articulo"))
cantidad=parseFloat(prompt("dijite la cantidad de los articulo"))


if(isNaN(precio)|| isNaN(cantidad)|| precio<=0 || cantidad<=0){

    console.log("rectifique los datos ")

}else{

    if (clave === 1 || clave === 2){

        switch(clave){
    
            case 1: 
            total = precio * cantidad
            totaldes=total*(10/100)
            pagar=total-totaldes
    
            console.log("Nombre del articulo: "+nombre)
            console.log("Clave del Producto: "+clave)
            console.log("Cantidad: "+precio+"X"+cantidad)
            console.log("precio total: " +total)
            console.log("descuento: "+totaldes)
            console.log("EL TOTAL A PAGAR ES: "+pagar)
            break;
    
            case 2:
            total = precio * cantidad
            totaldes=total*(20/100)
            pagar=total-totaldes
            console.log("Nombre del articulo: "+nombre)
            console.log("Clave del Producto: "+clave)
            console.log("Cantidad: "+precio+"X"+cantidad)
            console.log("precio total: " +total)
            console.log("descuento: "+totaldes)
            console.log("EL TOTAL A PAGAR ES: "+pagar)
            break;
    
        }
    
    
    }else{
        console.log("porfavor dijite una clave valida, esta solo puede ser 1 o 2")
    }

} 

//8

presupuesto= parseInt(prompt("dijite el presupuesto anual: "))
psi= parseInt(prompt("dijite porcentaje del presupesto para psiquiatria: "))
traum= parseInt(prompt("dijite porcentaje del presupesto para traumatologia: "))
pedi= parseInt(prompt("dijite porcentaje del presupesto para pediatria: "))

if(isNaN(psi)||isNaN(traum)||isNaN(pedi)||isNaN(presupuesto)){

    console.log("porfavor digite valores numericos validos")

}else if((psi+traum+pedi)>100){

    console.log("porfavor rectifique los porcentajes para cada area, ya que no pueden ser superiores al 100% y debe usarse el total del presuṕuesto")


}else{

    presupsi=((presupuesto)*(psi/100))
    console.log("el presupuesto para psiquiatria es: "+presupsi+"$")
    presutrum=((presupuesto)*(traum/100))
    console.log("el presupuesto para traumatologia es: "+presutrum+"$")
    presupedi=((presupuesto)*(pedi/100))
    console.log("el presupuesto para pediatria es: "+presupedi+"$")

}

//9

distancia=parseFloat(prompt("porfavor digite la distancia del viaje en KM"))
dias=parseFloat(prompt("cuatos dias se va a quedar? "))

valor= distancia*2.5

if(isNaN(distancia)||isNaN(dias)|| distancia<=0 || dias<=0){

console.log("digite valores validos")

}else{

    if(dias>=7 && distancia>=800){

        dcto=valor*(30/100)
        dctototal=valor-dcto

        console.log("usted tiene un dcto del 30% por calor de: "+dcto )
        console.log(", el valor total a pagar es: "+dctototal)

    }else{
        console.log("usted no tiene descuentos, el valor total a pagar es: "+valor)
    }

}




