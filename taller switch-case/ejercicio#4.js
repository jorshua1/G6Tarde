let minutos = parseInt(prompt("ingrese los minutos de la llamada"));
let base = 200;
let adicionales = (minutos-3)

if(isNaN(minutos)){
    alert("ERROR, alguno de los dos datos no es un número");
}else if(minutos>0 && minutos<=3){
    alert("El coste de la llamada fue: " + base);
}else if(minutos===0 || minutos<0 ){
        alert("No tiene que pagar nada");
}else{
    base = base + (adicionales*100);
    alert("su costo es: " + base);
}