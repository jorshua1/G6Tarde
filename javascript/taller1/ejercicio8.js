//matematicas
examenMa=parseInt(prompt("dijite la nota del examen de matematicas:"));
tarea1Ma=parseInt(prompt("dijite la nota de la primera tarea de matematicas:"));
tarea2Ma=parseInt(prompt("dijite la nota de la segunda tarea de matematicas:"));
tarea3Ma=parseInt(prompt("dijite la nota de la tercera tarea de matematicas:"));

promedioMa=(examenMa*(90/100))+(((tarea1Ma+tarea2Ma+tarea3Ma)/3)*(10/100))

//fisica
examenFi=parseInt(prompt("dijite la nota del examen de fisica:"));
tarea1Fi=parseInt(prompt("dijite la nota de la primera tarea de fisica:"));
tarea2Fi=parseInt(prompt("dijite la nota de la segunda tarea de fisica:"));

promedioFi=(examenFi*(80/100))+(((tarea1Fi+tarea2Fi)/2)*(20/100))

//quimica
examenQu=parseInt(prompt("dijite la nota del examen de Quimica:"));
tarea1Qu=parseInt(prompt("dijite la nota de la primera tarea de Quimica:"));
tarea2Qu=parseInt(prompt("dijite la nota de la segunda tarea de Quimica:"));
tarea3Qu=parseInt(prompt("dijite la nota de la tercera tarea de Quimica:"));

promedioQu=(examenQu*(85/100))+(((tarea1Qu+tarea2Qu+tarea3Qu)/3)*(15/100));

console.log("el promedio en Matematicas es de:  "+promedioMa);
console.log("el promedio en Fisica es de:  "+promedioFi);
console.log("el promedio en Quimica es de:  "+promedioQu);