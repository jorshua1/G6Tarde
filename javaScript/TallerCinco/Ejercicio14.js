/*Ejercicio 14
Crear un programa que lea los precios de 5 artículos y las 
cantidades vendidas por una empresa en sus 4 sucursales. Informar:

Las cantidades totales de cada articulo.
La cantidad de artículos en la sucursal 2.--
La cantidad del articulo 3 en la sucursal 1.--
La recaudación total de cada sucursal.--
La recaudación total de la empresa.
La sucursal de mayor recaudación. */

let precio = new Array(5);
let cantidad = new Array();
let suma = [0, 0, 0, 0, 0];
let ventaTotal = 0;
let vendidoSucursal2 = 0;
let articulo3EnSucursal1 = 0;
let totalSucursal = [0, 0, 0];
let sucursalMasVendida = 0;
let mensaje = "";

for(let i = 0; i < precio.length; i++){

    precio[i] = parseFloat(prompt(`Ingrese el precio del articulo ${i+1} `))
    while(isNaN(precio[i]) || precio[i] <= 0){
        precio[i] = parseFloat(prompt(`POR FAVOR ingrese un dato valido ${i+1} `))
    }
}

for(let i = 0; i < 3; i++){
    cantidad[i] = new Array(5);
}

for(let i = 0; i < 3; i++){

    for(let j = 0; j < cantidad[i].length; j++){
        
        cantidad[i][j]=parseFloat(prompt(`Ingrese la cantidad del articulo ${j+1} en la sucursal ${i+1}`))
        while(isNaN(cantidad[i][j]) || cantidad[i][j] < 0){
            cantidad[i][j]=parseFloat(prompt(`POR FAVOR ingrese datos validos, digite la cantidad del articulo ${j+1} en la sucursal ${i+1}`))
        }

    }
}

articulo3EnSucursal1 = cantidad[0][2];

for(let j = 0; j < 5; j++){
    for(let i = 0; i < cantidad.length; i++){
        suma[j] += cantidad[i][j];
    }
    mensaje += `Articulo ${j+1}: ${suma[j]} \n`
}
alert(`Las cantidades totales de cada articulo son: \n${mensaje}`)

for (let i = 0; i < 5;i++){
    vendidoSucursal2 += cantidad[1][i]; 
}
mensaje = "";

for (let i= 0; i < cantidad.length; i++){
    for (let j = 0; j < cantidad[i].length; j++){
        totalSucursal[i] += (cantidad[i][j] * precio[j]);
    }
    mensaje += `En la sucursal ${i+1} es: ${totalSucursal[i]}$ \n`
}

alert(`La cantidad de articulos en la sucursal 2 es: ${vendidoSucursal2}`);
alert(`La cantidad del articulo 3 en la sucursal 1 es: ${articulo3EnSucursal1}`);
alert(`El total recaudado: \n${mensaje}`);



