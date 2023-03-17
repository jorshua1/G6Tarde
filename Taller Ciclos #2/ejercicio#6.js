let niños =0 , jovenes =0, adultos =0, viejos =0, edad =0, pesoNiños =0, pesoJovenes=0, pesoAdultos=0, pesosViejos=0, sumaPesosNiños=0, sumaPesosJovenes=0, sumaPesosAdultos=0, sumaPesosViejos=0;
var contador = Number(prompt("Ingrese la cantidad que vamos a muestrear"));
while ((contador<0) || (isNaN(contador))) {
    alert("Por favor ingrese una edad positiva.");
    contador = Number(prompt("Ingrese la cantidad que vamos a muestrear"));
}
for (i = 1; i <= contador; i++) {
    edad = Number(prompt("Ingrese la edad de la persona: " + "#" + i));
    
    while ((edad < 0) || (isNaN(edad))) {
        alert("Por favor ingrese una edad positiva.");
        edad = Number(prompt("Ingrese la edad de la persona: " + i));
    }
    if (edad >= 0 && edad <= 12) {
        niños++
        pesoNiños = parseFloat(prompt("Ingrese el peso del niño en Kilogramos: "));
        while ((pesoNiños < 0) || (isNaN(pesoNiños))) {
            alert("Por favor ingrese un peso en Kilogramos y que sea positivo.");
            pesoNiños = parseFloat(prompt("Ingrese el peso del niño en Kilogramos: "));
        }
        sumaPesosNiños += pesoNiños;
    }else if (edad >= 13 && edad <= 29) {
        jovenes++
        pesoJovenes = parseFloat(prompt("Ingrese el peso del Joven en Kilogramos: "));
        while ((pesoJovenes < 0) || (isNaN(pesoJovenes))) {
            alert("Por favor ingrese un peso en Kilogramos y que sea positivo.");
            pesoJovenes = parseFloat(prompt("Ingrese el peso del Joven en Kilogramos: "));
        }
        sumaPesosJovenes += pesoJovenes;
    }else if (edad >= 30 && edad <= 59) {
        adultos++
        pesoAdultos = parseFloat(prompt("Ingrese el peso del Adulto en Kilogramos: "));
        while ((pesoAdultos < 0) || (isNaN(pesoAdultos))) {
            alert("Por favor ingrese un peso en Kilogramos y que sea positivo.");
            pesoAdultos = parseFloat(prompt("Ingrese el peso del Adulto en Kilogramos: "));
        }
        sumaPesosAdultos += pesoAdultos;
    }else{
        viejos++
        pesosViejos = parseFloat(prompt("Ingrese el peso del Anciano en Kilogramos: "));
        while ((pesosViejos < 0) || (isNaN(pesosViejos))) {
            alert("Por favor ingrese un peso en Kilogramos y que sea positivo.");
            pesosViejos = parseFloat(prompt("Ingrese el peso del Anciano en Kilogramos: "));
        }
        sumaPesosViejos += pesosViejos;
    }
}
let promedioniños = niños===0?0:(sumaPesosNiños / niños);
let promediojovenes = jovenes===0?0:(sumaPesosJovenes / jovenes);
let promedioAdultos = adultos===0?0:(sumaPesosAdultos / adultos);
let promedioviejos = viejos===0?0:(sumaPesosViejos / viejos);
alert("\n Los promedios de los pesos de los niños fueron: " + promedioniños +" Kg" + "\n Los promedios de los pesos de los Jovenes fueron: " + promediojovenes +" Kg" + "\n Los promedios de los pesos de los Adultos fueron: " + promedioAdultos +" Kg" + "\n Los promedios de los pesos de los Ancianos fueron: " + promedioviejos +" Kg");