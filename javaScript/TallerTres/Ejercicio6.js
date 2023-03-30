let niños = 0, jovenes  = 0, adultos = 0, viejos = 0, edad;
let pesoNiños = 0, pesojovenes = 0, pesoAdultos = 0, pesoViejos  = 0;
let totalPesoNIños = 0, totalPesoJovenes = 0, totalPesoAdultos = 0, totalPesoViejos = 0;
let promedioNiños = 0, promedioJovenes = 0, promedioAdultos = 0, promedioViejos = 0;

for (i = 1; i <= 5; i++){
    edad = parseInt(prompt("Ingrese la edad de la " + i + " persona que va a muestrear"));
    while (isNaN(edad) || edad < 0){
        edad = parseInt(prompt("Ingrese datos validos para la edad de la " + i + " persona que va a muestrear"));
    }

    if (edad >= 0 && edad <= 12){
        niños++;
        pesoNiños = parseFloat(prompt("Ingrese el peso del niño " + niños + " en Kg "));
        while (isNaN(pesoNiños) || pesoNiños < 0){
            pesoNiños = parseInt(prompt("ERROR, porfavor ingrese datos validos para el peso."));
        }
        totalPesoNIños += pesoNiños;
    }

    if (edad >= 13 && edad <= 29){
        jovenes++;
        pesojovenes = parseFloat(prompt("Ingrese el peso del joven " + jovenes + " en Kg "));
        while (isNaN(pesojovenes) || pesojovenes < 0){
            pesojovenes = parseInt(prompt("ERROR, porfavor ingrese datos validos para el peso."));
        }
        totalPesoJovenes += pesojovenes;
    }

    if (edad >= 30 && edad <= 59){
        adultos++;
        pesoAdultos = parseFloat(prompt("Ingrese el peso del adulto " + adultos + " en Kg "));
        while (isNaN(pesoAdultos) || pesoAdultos < 0){
            pesoAdultos = parseInt(prompt("ERROR, porfavor ingrese datos validos para el peso."));
        }
        totalPesoAdultos += pesoAdultos;
    }

    if (edad > 60){
        viejos++;
        pesoViejos = parseFloat(prompt("Ingrese el peso del viejos " + viejos + " en Kg "));
        while (isNaN(pesoViejos) || pesoViejos < 0){
            pesoViejos = parseInt(prompt("ERROR, porfavor ingrese datos validos para el peso."));  
        }
        totalPesoViejos += pesoViejos;
    }
}
promedioNiños = niños === 0 ? alert("Usted no ingreso datos de niños "): alert("El promedio de los "+ niños +" niños es: "+ (totalPesoNIños / niños)+ " Kg");
promedioJovenes = jovenes === 0 ? alert("Usted no ingreso datos de jovenes") :alert("El promedio de peso de los "+jovenes+" es: "+(totalPesoJovenes / jovenes)+ " Kg");
promedioAdultos = adultos === 0 ? alert("Usted no ingreso datos de adultos "):alert("El promedio de peso de los "+ adultos+ " es: " + (totalPesoAdultos / adultos)+ " Kg");
promedioViejos = viejos === 0 ? alert("Usted no ingreso datos de viejos" ):alert("El promedio de peso de los "+ viejos+" viejos es " +(totalPesoViejos / viejos)+ " Kg");
