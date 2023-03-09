let previo1=Number(prompt("ingrese la nota previo 1"))
let previo2=Number(prompt("ingrese la nota previo 2"))
let previo3=Number(prompt("ingrese la nota previo 3"))
let tra1=Number(prompt("ingrese la nota del trabajo 1"))
let tra2=Number(prompt("ingrese la nota del trabajo 2"))

let promedioprevio=(previo1+previo2+previo3)/3
let porprevio=((previo1+previo2+previo3)/3)*0.6
let promediotar=(tra1+tra2)/2
let protar=((tra1+tra2)/2)*0.4

//notas trabajos


console.log("la nota promedio de los previo es :" +promedioprevio + "y el 60% es :"+porprevio);

console.log("la nota promedio de trabajo es :"+promediotar+ "y el 40% es :"+protar);

console.log("la nota final es :"+(protar+porprevio));

