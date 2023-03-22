niños=0;
jovenes=0;
adultos=0;
viejos=0;
personas=0
pesoNiños=0;
pesoJovenes=0;
pesoAdultos=0;
pesoViejos=0;
for(personas;personas<20;personas++){
    let edad=Number(prompt("Ingrese edad de la persona"))
    while((isNaN(edad))||(edad<0)||(!Number.isInteger(edad))){
        edad = Number(prompt("Por favor, indique un valor válido de edad."))
    }
    peso = Number(prompt("En kilogramos, indique el peso de la persona \n (Valor máximo = 250kg"))
    while((isNaN(peso))||(peso<0)||(peso>250)){
        peso = Number(prompt("Por favor, indique un valor válido de peso."))
    }
    if((edad>=0)&&(edad<=12)){
        niños++
        pesoNiños = pesoNiños+peso
    }else if((edad>=13)&&(edad<=29)){
        jovenes++
        pesoJovenes = pesoJovenes+peso
    }else if((edad>=30)&&(edad<=59)){
        adultos++
        pesoAdultos = pesoAdultos+peso
    }else if(edad>=60){
        viejos++
        pesoViejos = pesoViejos+peso
    }
}
promNiños=pesoNiños/niños;
promJovenes=pesoJovenes/jovenes;
promAdultos=pesoAdultos/adultos;
promViejos=pesoViejos/viejos;
alert("Promedio peso niños: "+promNiños)
alert("Promedio peso jovenes: "+promJovenes)
alert("Promedio peso adultos: "+promAdultos)
alert("Promedio peso viejos: "+promViejos)