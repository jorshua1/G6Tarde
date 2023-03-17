let niños=0, jovenes=0, adultos=0, viejos=0, edad, pesoniños, pesojovenes, pesoadultos, pesoviejos, sumapesoniños=0, sumapesojovenes=0, sumapesoadultos=0, sumapesoviejos=0;
let promediopesoniños=0, promediopesojovenes=0, promediopesoadultos=0, promediopesoviejos=0;
for(i=1; i<=20; i++){
    edad = parseInt(prompt("Ingrese la edad de la persona " + i +" del muestreo")); 
    while(isNaN(edad)|| edad<0){
        edad = parseInt(prompt("ERROR, Ingrese la edad de la persona " + i + " del muestreo")); 
    }
    if(edad>=0 && edad<=12){
        niños++
        pesoniños = parseFloat(prompt("Ingrese el peso del niño "+niños+" en kg"));
        while(isNaN(pesoniños)|| pesoniños<0){
            pesoniños = parseFloat(prompt("Ingrese el peso del niño "+niños+"en kg"));
        }
        sumapesoniños+= pesoniños;
    }
    if(edad>=13 && edad<=29){
        jovenes++
        pesojovenes = parseFloat(prompt("Ingrese el peso del joven "+jovenes+" en kg"));
        while(isNaN(pesojovenes)|| pesojovenes<0){
            pesojovenes = parseFloat(prompt("Ingrese el peso del joven "+jovenes+" en kg"));
        }
        sumapesojovenes+= pesojovenes;
    }
    if(edad>=30 && edad<=59){
        adultos++
        pesoadultos = parseFloat(prompt("Ingrese el peso del adulto "+adultos+" en kg"));
        while(isNaN(pesoadultos)|| pesoadultos<0){
            pesoadultos = parseFloat(prompt("Ingrese el peso del adulto "+adultos+ "en kg"));
        }
        sumapesoadultos+= pesoadultos;
    }
    if(edad>=60){
        viejos++
        pesoviejos = parseFloat(prompt("Ingrese el peso del viejo "+viejos+ " en kg"));
        while(isNaN(pesoviejos)|| pesoviejos<0){
            pesoviejos = parseFloat(prompt("Ingrese el peso del viejo "+viejos+ " en kg"));
        }
        sumapesoviejos+= pesoviejos;
    }
}

promediopesoniños = niños===0?0: (sumapesoniños/niños);
promediopesojovenes = jovenes===0?0: (sumapesojovenes/jovenes);
promediopesoadultos = adultos===0?0: (sumapesoadultos/adultos);
promediopesoviejos = viejos===0?0: (sumapesoviejos/viejos);

console.log("El promedio del peso de los niños es: "+ promediopesoniños +" kg");
console.log("El promedio del peso de los jovenes es: "+ promediopesojovenes +" kg");
console.log("El promedio del peso de los adultos es: "+ promediopesoadultos +" kg");
console.log("El promedio del peso de los viejos es: "+ promediopesoviejos +" kg");
