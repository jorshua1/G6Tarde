let años = Number(prompt("Cual es tu edad? por favor digitala en años (ejm 22) sin la palabra años"));
let ingresos = Number(prompt("Cuantos son tus ingresos mensuales"));
if((años>=16)&&(ingresos>=1000)){
    alert("Tienes que tributar")
}else{
    alert("NO tienes que tributar")
}