let edad= Number(prompt("Ingrese su edad"));
let ingresos=Number(prompt("Digite sus ingresos"));

if (isNaN(edad)||isNaN(ingresos)){
    alert("ERROR.")
}else if(edad<16||(edad>16&&ingresos<1000)){
    alert("No debe tributar");
}else if(edad>16 && ingresos>1000){
    alert("Si debe tributar");
}