let dias=Number(prompt("Ingrese los días que viajará"));
if(isNaN(dias)||dias<=0){
    alert("Ingrese un día válido");
}else{
    let distancia=Number(prompt("Ingrese la distancia total a recorrer en Km/h"));
    if(isNaN(distancia)||distancia<=0){
        alert("Ingrese una distancia válida");
    }else{
        let totalDistancia=distancia*2.5;
        if (distancia>800 && dias>=7){
            alert("El valor total de su billete con el descuento que se le aplica es de: "+(totalDistancia-(totalDistancia*0.3)));
        }else{
            alert("El valor total de su billete es de: "+totalDistancia);
        }
    }
}