let ex1 = Number(prompt("ingrese la nota del examen 1"));
ex1 <0 || ex1>5.0 || isNaN(ex1)? alert("nota incorrecta por favor vuelva iniciar el programa") : console.log("nota ingresada correctamente");
let ex2 = Number(prompt("ingrese la nota del examen 2"));
ex2 <0 || ex2>5.0 || isNaN(ex2)? alert("nota incorrecta por favor vuelva iniciar el programa") : console.log("nota ingresada correctamente");
let ex3 = Number(prompt("ingrese la nota del examen 3"));
ex1 <0 || ex1>5.0 || isNaN(ex3)? alert("nota incorrecta por favor vuelva iniciar el programa") :console.log("nota ingresada correctamente") ;
let t1 = Number(prompt("ingrese la nota del trabajo 1"));
t1 <0 || t1>5.0 || isNaN(t1)? alert("nota incorrecta por favor vuelva iniciar el programa") : console.log("nota ingresada correctamente");
let t2 = Number(prompt("ingrese la nota del trabajo 2"));
t2 <0 || t2>5.0 || isNaN(t2)? alert("nota incorrecta por favor vuelva iniciar el programa") : console.log("nota ingresada correctamente");
let exf = Number(prompt("ingrese la nota del examen final"));
exf <0 || exf>5.0 || isNaN(exf)? alert("nota incorrecta por favor vuelva iniciar el programa") : console.log("nota ingresada correctamente");
let aut = Number(prompt("ingrese la nota de autoevaluacion"));
aut <0 || aut>5.0 || isNaN(aut)? alert("nota incorrecta por favor vuelva iniciar el programa") :console.log("nota ingresada correctamente");
let coe = Number(prompt("ingrese la nota de coevaluacion"));
coe <0 || coe>5.0 || isNaN(coe)? alert("nota incorrecta por favor vuelva iniciar el programa") :console.log("nota ingresada correctamente");
let definitiva = (((ex1+ex2+ex3)/3)*0.55)+(((t1+t2)/2)*0.15)+(exf*0.2)+(((aut+coe)/2)*0.1);
 
if (definitiva<=5.0 && definitiva >= 4.7 ){
    alert("el estudiante ha APROBADO con una nota de "+definitiva+ " dejandolo en un nivel SUPERIOR");
}else if (definitiva<4.7 && definitiva >= 4.0 ){
    alert("el estudiante ha APROBADO con una nota de "+definitiva+" dejandolo en un nivel ALTO");
} else if (definitiva<4.0 && definitiva >= 3.0 ){
    alert("el estudiante ha APROBADO con una nota de "+definitiva+" dejandolo en un nivel BÁSICO");
} else if (definitiva<3.0 && definitiva >= 2.0 ){
    alert("el estudiante ha REPROBADO con una nota de "+definitiva+" dejandolo en un nivel BAJO");
} else if (definitiva<2.0 && definitiva >= 0 ){
    alert("el estudiante ha REPROBADO con una nota de "+definitiva+" dejandolo en un nivel MUY BAJO");
}
