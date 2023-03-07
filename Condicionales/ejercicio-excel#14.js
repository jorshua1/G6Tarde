let preciohelado = prompt("Ingrese el sabor de su helado \n oreo \n kitkat \n brownie \n lacasitos");
let preciobase =1.90;
let precioTopping = 0;
let precioTotal = (preciobase+precioTopping);

if(preciohelado=="oreo"){
    precioTopping = 1;
    alert("El precio del helado de Oreo es: " + precioTopping + "y el precio total es de :" + precioTotal);
}else if(preciohelado=="kitkat"){
    precioTopping = 1.50;
    alert("El precio del helado de kitkat es: " + precioTopping + "y el precio total es de :" + precioTotal);
}else if(preciohelado=="brownie"){
    precioTopping = 0.75;
    alert("El precio del helado de brownie es: " + precioTopping + "y el precio total es de :" + precioTotal);
}else if(preciohelado=="lacasitos"){
    precioTopping = 0.95;
    alert("El precio del helado de lacasitos es: " + precioTopping + "y el precio total es de :" + precioTotal);
}else{
    alert("No tenemos este topping, lo sentimos.");
}
