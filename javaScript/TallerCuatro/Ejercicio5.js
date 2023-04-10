let numeros = new Array(10);
let buscarNumero = 0;
let posicion = "";

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = parseFloat(prompt(`Ingrese un numero, se guardara en la poscicion ${i} `));
    while (isNaN(numeros[i])) {
        numeros[i] = parseFloat(prompt(`Por favor ingrese datos validos, solo numeros. `));
    }
}
alert(`El vector de 10 numeros es: ${numeros}`);

do {
    buscarNumero = parseInt(prompt(`Ingrese el numero que desea buscar en el vector.\nPara salir ingrese un valor no numerico `));
    if (!isNaN(buscarNumero)) {
        for (let buscar = 0; buscar < numeros.length; buscar++) {

            if (numeros[buscar] === buscarNumero) {
                posicion += `Posicion ${buscar} \n`;
            }
        }

        if (posicion !== "") {
            alert(`El numero fue encontrado en las posiciones. \n${posicion}`)
        } else {
            alert(`El numero ${buscarNumero} no fue encontrado`);
        }
    }
    posicion="";
} while (!isNaN(buscarNumero));