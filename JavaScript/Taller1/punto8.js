//matematicas
var examM=parseFloat(prompt("ingrese nota del examen de matematicas"));
var tarea1M=parseFloat(prompt("ingrese nota tarea 1 matematicas"));
var tarea2M=parseFloat(prompt("ingrese nota tarea 2 matematicas"));
var tarea3M=parseFloat(prompt("ingrese nota tarea 3 matematicas"));
var promEM=(examM*90)/100;
var promTM=((tarea1M+tarea2M+tarea3M)*10)/100;
var promtotalM=(promEM+promTM)/2;
alert("Su promedio final de matematicas es:" + promtotalM);
//Fisica
var examF=parseFloat(prompt("ingrese nota del examen de fisica"));
var tarea1F=parseFloat(prompt("ingrese nota tarea 1 fisica"));
var tarea2F=parseFloat(prompt("ingrese nota tarea 2 fisica"));
var promEF=(examF*80)/100;
var promTF=((tarea1F+tarea2F)*20)/100;
var promtotalF=(promEF+promTF)/2;
alert("Su promedio final de fisica es:" + promtotalF);
//Quimica
var examQ=parseFloat(prompt("ingrese nota del examen de Quimica"));
var tarea1Q=parseFloat(prompt("ingrese nota tarea 1 Quimica"));
var tarea2Q=parseFloat(prompt("ingrese nota tarea 2 Quimica"));
var tarea3Q=parseFloat(prompt("ingrese nota tarea 3 Quimica"));
var promEQ=(examM*85)/100;
var promTQ=((tarea1M+tarea2M+tarea3M)*15)/100;
var promtotalQ=(promEQ+promTQ)/2;
alert("Su promedio final de Quimica es:" + promtotalQ);
promGENERAL=(promtotalM+promtotalF+promtotalQ)/3;
alert("Su promedio general de las 3 materias es de:"+promGENERAL);