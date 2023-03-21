const error = "PELIGRO DATOS INCORRECTOS, NO SABE LEER NI ESCRIBIR";
let edad = 0;
let desplazamiento = 0;
let carnet = 0;
let carnetRenovado = 0;

edad = Number(prompt("Por favor, ingrese su edad."))
while((isNaN(edad))||(edad<0)||(!Number.isInteger(edad))){
    alert(error);
    edad = edad = Number(prompt("Por favor, ingrese un valor de edad válido."))
}
desplazamiento = Number(prompt("¿De qué manera se desplaza? Seleccione una de las siguientes opciones mediante su respectivo número.\n1. A pie.\n2.Bicicleta.\n3.Moto.\n4.Carro."));
while((desplazamiento != 1)&&(desplazamiento != 2)&&(desplazamiento != 3)&&(desplazamiento != 4)){
    alert(error);
    desplazamiento = Number(prompt("Por favor, seleccione una de las siguientes opciones válidas mediante su respectivo número.\n1. A pie.\n2.Bicicleta.\n3.Moto.\n4.Carro."));
}
if((edad>=16)&&((desplazamiento == 3)||(desplazamiento == 4))){
    carnet = Number(prompt("¿Tiene carnet de conducción?\n1 para SI.\n2 para NO."))
    while((carnet!==1)&&(carnet!==2)){
        alert(error);
        carnet = Number(prompt("¿Tiene carnet de conducción?\n1 para SI.\n2 para NO."))
    }
    if(carnet===1){
        carnetRenovado = Number(prompt("¿Tiene el carnet de conducción renovado?\n1 para SI.\n2 para NO."));
        while((carnetRenovado!==1)&&(carnetRenovado!==2)){
            alert(error);
            carnetRenovado = Number(prompt("¿Tiene el carnet de conducción renovado?\n1 para SI.\n2 para NO."));
            if(carnetRenovado===1){
                
            }
    }else{

    }
}else{

}