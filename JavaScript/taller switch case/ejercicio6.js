alert("A continuacion calcularemos su nota final (ingresar valor de 1,0 a 5,0)")
let eva1=(parseFloat(prompt("Ingrese nota evaluacion 1")));
let eva2=(parseFloat(prompt("Ingrese nota evaluacion 2")));
let eva3=(parseFloat(prompt("Ingrese nota evaluacion 3")));
let previos=(eva1+eva2+eva3)*60/100;
let tra1=(parseFloat(prompt("Ingrese nota de trabajo 1")));
let tra2=(parseFloat(prompt("Ingrese nota de trabajo 2")));
let trabajos=(tra1+tra2)*40/100;
let final= (previos+trabajos)/2;
alert("Su nota final es:" + final);
