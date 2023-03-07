let actual = parseInt(prompt("Digite el mes en el que esta: 1/enero   2/febrero   3/marzo   4/abril   5/mayo    6/junio    7/julio    8/agosto    9/septiembre    10/octubre    11/noviembre    12/diciembre"))

if (isNaN(actual)){
    console.log("ERROR, DIGITE EL NUMERO CORRESPONDIENTE AL MES");
}else if (actual >= 3 && actual <= 6){
    console.log("estas en primavera");
}else if (actual >6 && actual <= 9){
    console.log("estas en verano");
}else if (actual > 9 && actual <= 11){
        console.log("estas en otoño");
}else if (actual === 12 ){
        console.log("estas en invierno");
}else if (actual >= 1 && actual < 3){
        console.log("estas en invierno");
}else {
    alert("error, ingrese un numero valido");
}

