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





