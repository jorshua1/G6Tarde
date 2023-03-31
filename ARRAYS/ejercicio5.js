let numeros = []
for(let i=0;i<10;i++){
    let numero = Number(prompt("Ingrese un numero"))
    while(isNaN(numero)||numero<0||!Number.isInteger(numero)){
        alert("Ingrese un dato valido")
        numero = Number(prompt("Ingrese un numero"))
    }
    numeros[i]=numero
}
alert(`Numeros: ${numeros}`)
let busqueda = Number(prompt("Seleccione el numero que desea buscar"));
for(let x=0;x<numeros.length;x++){
    if(busqueda === numeros[x]){
        alert("Numero encontrado en posicion:" + x)
        break;
    }
}
if(busqueda !== numeros[0] || busqueda !== numeros[1] || busqueda !== numeros[2] || busqueda !== numeros[3] || busqueda !== numeros[4] || busqueda !== numeros[5] || busqueda !== numeros[6] || busqueda !== numeros[7] || busqueda !== numeros[8] || busqueda !== numeros[9]){
    alert("Valor no encontrado")
}