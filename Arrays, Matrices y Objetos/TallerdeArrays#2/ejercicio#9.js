let temperaturaMin = new Array(5);
let temperaturaMax = new Array(5);
let dias = new Array(5);
let opcion = 0;

while (opcion !== 4) {
    opcion = parseInt(prompt(`
Selecciona una opcion del menu:
1. Ingresar datos de dias y temperatura
2. El dia con menos temperatura
3. Buscador de Temperaturas
4. Salir del programa.
`))
    while (isNaN(opcion) || opcion <= 0 || opcion > 4) {
        opcion = parseInt(prompt(`
    Por favor revise bien las opciones del Menu!!!

    Selecciona una opcion del menu:
    1. Ingresar datos de dias y temperatura
    2. El dia con menos temperatura
    3. Buscador de Temperaturas
    4. Salir del programa.
    `))
    }
    alert(opcion)
    switch (opcion) {
        case 1:
            dias[i] = prompt(`Ingrese por el Nombre del dia que vamos a registrar`);
            while (!isNaN(dias) || (dias === null) || (dias === "")) {
                dias[i] = prompt(`!Error!
                EL DATO QUE INGRESO ES INCORRECTO, POR FAVOR VALIDE DE NUEVO.
                Ingrese por el Nombre del dia que vamos a registrar`);
            }
            temperaturaMax[i] = Number(prompt(`Ingrese por favor la temperatura Minima del dia: ${(dias[i])}`));
            while (isNaN(temperaturaMax[i]) || (temperaturaMax[i]) < 0) {
                alert(`!Error!
                EL DATO QUE INGRESO ES INCORRECTO, POR FAVOR VALIDE DE NUEVO.`);
                temperaturaMax[i] = Number(prompt(`Ingrese por favor la temperatura Minima del dia: ${(dias[i])}`));
                temperaturaMin[i] = Number(prompt(`Ingrese por favor la temperatura Minima del dia: `));
                break;

            }
        case 2:
    }
}