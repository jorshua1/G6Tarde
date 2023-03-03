edad = parseInt(prompt("porfavor digite su edad: ")); 


if (edad>=0){
    if (edad === 0){
        console.log("cero no es una edad valida");
    }else{
        if (edad >= 18){
            console.log("usted es mayor de edad");
        }
        else{
            console.log("usted es menor de edad");
            }
        }  
    }else{
        console.log(edad+" no es una edad valida");    
        }

numero = parseInt(prompt("porfavor digite un numero: "));
if(numero>=0){
    if (numero===0){
        console.log("El numero ingresado es cero y este es neutro");  
    }else if (numero%2 == 0){
        console.log("su numero es un numero par");  
    }else{
        console.log("su numero es impar");  
    }
}else{
    console.log(numero+" no es un numero valido"); 
}



edad = parseInt(prompt("porfavor digite su edad: ")); 

if (edad >=100){
    console.log("usted es amigo de matusalen");
}else{
    if(edad<70 && edad>=51){
        console.log("usted se encuentra en el grupo casi parica estirada");
    }else if(edad<50 && edad>=26){
        console.log("usted se encuentra en el grupo casi pensionado");
    }else if(edad<25 && edad>=18){
        console.log("usted se encuentra en el grupo trabajador/desocupado");
    }else if(edad<18 && edad>=16){
        console.log("usted se encuentra en el grupo maduro");
    }else if(edad<15 && edad>=11){
    console.log("usted se encuentra en el grupo casi maduro");  
    }else if(edad<10 && edad>=6){
        console.log("usted se encuentra en el grupo adolexentez");
    }else if(edad<5 && edad>0){
        console.log("usted se encuentra en el grupo bb mas grande ");    
    }else if (edad>=0){
            console.log("usted se encuentra en el grupo bb");
        }
}





