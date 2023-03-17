    let numero=0;
    while(true){
        alert(numero);
        break;
    }
    console.log("hola")


    //do-while

    do{
        alert(numero);
        numero++;
    }while(numero<=10);

//ejerciciowhileeeeeeeeeeee (NO sabemos en que punto termina)



let numero1=Number(prompt("Ingrese el numero que desea conocer la tabla del 10"));
let numero2=1;
if(numero1>=0){
    while(numero2<=10){
        console.log(numero1+" x "+numero2+" =" +numero1*numero2);
        numero2++;
    }   
}else{
    while(isNaN(numero1)||numero1<0){
        numero1=Number(prompt("Ingrese un numero válido nuevamente"));
    }
    while(numero2<=10){
        console.log(numero1+" x "+numero2+" =" +numero1*numero2);
        numero2++;
    }  
}

