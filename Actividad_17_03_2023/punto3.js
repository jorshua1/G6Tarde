let niños = 0, jovenes = 0, adultos = 0,viejos = 0, edad;
let pesoniños = 0, pesojovenes = 0, pesoadultos = 0, pesoviejos = 0;
let totalpesoniños = 0, totalpesojovenes = 0, totalpesoadultos = 0, totalpesoviejos = 0;
let promedioniños = 0, promediojovenes = 0, promedioadultos = 0, promedioviejos = 0;

let personas = parseInt(prompt("por favor digitar cuantas personas se van a muestrear"));
while (personas<=0 || isNaN(personas)){
    console.log("por favor digite un valor valido");
    personas = parseInt(prompt("por favor digitar cuantas personas se van a muestrear"));
}

for (let i = 1; i <= personas; i++){

edad = parseInt(prompt("por favor digitar la edad de la persona "+i));

if (edad >0 && edad <= 12) {
    niños++
    pesoniños = parseInt(prompt("por favor digitar el peso del niño"));
    while (pesoniños<=0 || isNaN(pesoniños)){
        console.log("por favor digite un valor valido");
        pesoniños = parseInt(prompt("por favor digitar el peso del niño"));
    }
    totalpesoniños += pesoniños;
}

if (edad >12 && edad <= 29) {
    jovenes++
    pesojovenes = parseInt(prompt("por favor digitar el peso del joven"));
    while (pesojovenes<=0 || isNaN(pesojovenes)){
        console.log("por favor digite un valor valido");
        pesojovenes = parseInt(prompt("por favor digitar el peso del joven"));
    }
    totalpesojovenes += pesojovenes;
}

if (edad >29 && edad <= 59) {
    adultos++
    pesoadultos = parseInt(prompt("por favor digitar el peso del adulto"));
    while (pesoadultos<=0 || isNaN(pesoadultos)){
        console.log("por favor digite un valor valido");
        pesoadultos = parseInt(prompt("por favor digitar el peso del adulto"));
    }
    totalpesoadultos += pesoadultos;
}

if (edad >59) {
    viejos++
    pesoviejos = parseInt(prompt("por favor digitar el peso del viejo"));
    while (pesoviejos<=0 || isNaN(pesoviejos)){
        console.log("por favor digite un valor valido");
        pesoviejos = parseInt(prompt("por favor digitar el peso del viejo"));
    }
    totalpesoviejos += pesoviejos;
}
}

if (niños > 0) {
    promedioniños = totalpesoniños / niños;
    alert("el promedio de "+niños+" niños es de: "+promedioniños);
}else{
    alert("No se ingreso ningun peso de niños");
}

if (jovenes > 0) {
    promediojovenes = totalpesojovenes / jovenes;
    alert("el promedio de "+jovenes+" jovenes es de: "+promediojovenes);
}else{
    alert("No se ingreso ningun peso de jovenes");
}

if (adultos > 0) {
    promedioadultos = totalpesoadultos / adultos;
    alert("el promedio de "+adultos+" adultos es de: "+promedioadultos);
}else{
    alert("No se ingreso ningun peso de adultos");
}

if (viejos > 0) {
    promedioviejos = totalpesoviejos / viejos;
    alert("el promedio de "+viejos+" viejos es de: "+promedioviejos);
}else{
    alert("No se ingreso ningun peso de viejos");
}

