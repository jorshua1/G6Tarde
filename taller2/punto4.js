let minutos = Number(prompt("Ingrese los minutos que demoró la llamada"));
let minex = (minutos-3)*(100)+(200);

if(isNaN(minutos)){
    console.log("¡ERROR!");
}else if(minutos <=3 ){
    console.log("Debe pagar 200 pesos");
}else if(minutos > 3){
    console.log("Debe pagar: "+minex);
}else{
    console.log("Ingrese un valor valido");
}