//sabemos cuando termina el programa.

let I=1;

let numero1=Number(prompt("Ingrese el numero que desea conocer la tabla del 10"));
if(numero1>=0){
    for (I;I<=10;I++){
        console.log(numero1+" x "+I+" =" +numero1*I);
    }
}else{
    while(isNaN(numero1)||numero1<0){
        numero1=Number(prompt("Ingrese un numero válido nuevamente"));
    }
    for (I;I<=10;I++){
        console.log(numero1+" x "+I+" =" +numero1*I);
    }
}
