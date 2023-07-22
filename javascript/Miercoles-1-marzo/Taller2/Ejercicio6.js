let previo1 = Number(prompt("ingrese la nota del primer previo"));
let previo2 = Number(prompt("ingrese la nota del segundo previo"));
let previo3 = Number(prompt("ingrese la nota del tercer previo"));
let trabajo1 = Number(prompt("ingrese la nota del primer trabajo"));
let trabajo2 = Number(prompt("ingrese la nota del segundo trabajo"));
let nota;

if (previo1<1 || previo2<1 || previo3<1 || trabajo1<1 || trabajo2<1){
    alert("ingrese una nota válida de 1.0 a 5.0");
} else if (previo1>5 || previo2>5 || previo3>5 || trabajo1>5 || trabajo2>5){
    alert("ingrese una nota válida de 1.0 a 5.0");
} nota = ((previo1+previo2+previo3)/3)*0.6 + ((trabajo1+trabajo2)/2)*0.4;
alert("La nota final es: " + nota);