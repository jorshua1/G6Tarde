/*"Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo."*/
let numart=parseInt(prompt("ingrese el numero de articulos"));
    let valortotal=parseInt(prompt("ingrese el valor total de los productos en euros"));
    if(!isNaN(numart) && !isNaN(valortotal)){
        if(numart>=10 && valortotal>=40){
            let descuento=(valortotal*0.15)
            console.log("su total a pagar es"+(valortotal-descuento))
        }
    else{
        console.log("su valor a pagar es"+valortotal)
    }
    }
    else{
        console.log("sus datos son invalidos")
    }