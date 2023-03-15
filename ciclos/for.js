let i = 1;
let resultado;
let tabla;
let numero = parseInt(prompt("por favor ingresar el numero al cual deseas conusltar la tabla"));

while(!isNaN(numero) && numero>0){
    let numero = parseInt(prompt("por favor ingresar el numero al cual deseas conusltar la tabla"));
}
for(i = 1; i<=10; i++){
    resultado = i * numero;
    tabla+=("\n"+i+" x "+numero+" = "+resultado);
}
alert(tabla);