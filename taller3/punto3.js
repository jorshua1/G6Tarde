let edad = 0;
let peso = 0;
let personas = 0;

let catNiños = 0;
let pesoCatNiños = 0;
let promedioPesoNiños = 0;

let catJovenes = 0;
let pesoCatJovenes = 0;
let promedioPesoJovenes = 0;

let catAdultos = 0;
let pesoCatAdultos = 0;
let promedioPesoAdultos = 0;

let catViejos = 0;
let pesoCatViejos = 0;
let promedioPesoViejos = 0;

for(personas;personas<20;personas++){
    edad = Number(prompt("Por favor, indique la edad de la persona."))
    while((isNaN(edad))||(edad<0)||(!Number.isInteger(edad))){
        edad = Number(prompt("Por favor, indique un valor válido de edad."))
    }
    peso = Number(prompt("En kilogramos, indique el peso de la persona \n (Valor máximo = 250kg"))
    while((isNaN(peso))||(peso<0)||(peso>250)){
        peso = Number(prompt("Por favor, indique un valor válido de peso."))
    }
    if((edad>=0)&&(edad<=12)){
        catNiños++
        pesoCatNiños = pesoCatNiños+peso
    }else if((edad>=13)&&(edad<=29)){
        catJovenes++
        pesoCatJovenes = pesoCatJovenes+peso
    }else if((edad>=30)&&(edad<=59)){
        catAdultos++
        pesoCatAdultos = pesoCatAdultos+peso
    }else if(edad>=60){
        catViejos++
        pesoCatViejos = pesoCatViejos+peso
    }
}
promedioPesoNiños = pesoCatNiños/catNiños;
promedioPesoJovenes = pesoCatJovenes/catJovenes;
promedioPesoAdultos = pesoCatAdultos/catAdultos;
promedioPesoViejos = pesoCatViejos/catViejos

alert("Hubieron " + catNiños + " niños en el muestreo de las 20 personas. Su peso promedio es de = " + promedioPesoNiños + "kg.\nHubieron " + catJovenes + " jóvenes en el muestreo de las 20 personas. Su peso promedio es de = " + promedioPesoJovenes + "kg.\nHubieron " + catAdultos + " adultos en el muestreo de las 20 personas. Su peso promedio es de = " + promedioPesoAdultos + "kg.\nHubieron " + catViejos + " viejos en el muestreo de las 20 personas. Su peso promedio es de = " + promedioPesoViejos + "kg.\n");
