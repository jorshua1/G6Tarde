let caracteresStart = new Array(5);
let caracteresExit = new Array(5);

for (let i = 0; i < caracteresStart.length; i++) {
    caracteresStart[i] = prompt(`Ingrese la primera Linea de Caracteres N°${(i + 1)} \n Nota: No puede tener espacios vacios`);
    while ((caracteresStart[i] === "")) {
        alert(`La linea N°${(i + 1)} No puede tener espacios vacios`);
        caracteresStart[i] = prompt(`Ingrese la primera Linea de Caracteres N°${(i + 1)} \n Nota: No puede tener espacios vacios`);
    }
}
i = caracteresStart.length - 1;
for (let j = 0; j < caracteresStart.length; j++) {
    caracteresExit[j] = caracteresStart[i];
    alert(`En la posicion ${[j]} \n El valor es; ${caracteresStart[j]} \n El resultado invertido es: ${caracteresExit[j]}`);
    i--
}