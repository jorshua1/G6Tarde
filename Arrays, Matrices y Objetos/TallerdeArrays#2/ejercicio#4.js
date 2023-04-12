let vectorEnteros = new Array(5);
for (let i = 0; i < vectorEnteros.length; i++) {
    vectorEnteros[i] = Number(prompt(`Ingrese el valor N°${(i + 1)}`))
    while (isNaN(vectorEnteros[i])) {
        alert("Por favor, ingrese un valor valido");
        vectorEnteros[i] = Number(prompt(`Ingrese el valor N°${(i + 1)}`))
    }
    if (vectorEnteros[i] < 0) {
        alert(`\n El valor ingresado es Negativo: ${vectorEnteros[i]} \n se cerrara el programa`);
        //el valor splice sirve para eliminar datos del array y ponemos la cantidad de datos que quiero eliminar
        vectorEnteros.splice(i,1);
        break;
    } else if (vectorEnteros[i] > 0){
        alert(`\n El valor ingresado es Positivo: ${vectorEnteros[i]} \n En la posicion N°: ${(i + 1)}`);
    }
}
alert(vectorEnteros);



