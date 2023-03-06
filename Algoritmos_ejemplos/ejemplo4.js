let edad= parseInt(prompt("ingrese su edad"))
let ingresos= parseInt(prompt("ingrese el valor de sus ingresos mensuales"))


    
 if (edad>=16 && ingresos>=1000){
    alert("tiene que tributar")
}else if (ingresos<1000 && edad<16){
    alert("no debe tributar")
}