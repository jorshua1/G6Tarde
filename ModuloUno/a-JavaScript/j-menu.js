let nombre = "Jefphunter";

console.log(`MENU
1.Alternativa 1 ${nombre}
2.Alternativa 2
`);

var menu = "Menu Principal.\n";

menu += `
1. Sumar.
2. Restar.
3. Multiplicar.
4. Dividir.
5. SALIR.
Por favor ingresar una opción:`

var opcion = 0;

do {
    opcion = parseInt(prompt(menu));
    alert(`El codigo es ${opcion}`);

    switch (opcion) {
        case 1: alert(`1. Sumar.`);
            break;
        case 2: alert(`2. Restar.`);
            break;
        case 3: alert(`3. Multiplicar.`);
            break;
        case 4: alert(`4. Dividir.`);
            break;
        case 5: alert(`5. Salir.`);
            break;
        default: alert(`la opcion no exixte!!`)
    }
} while (opcion != 5);



var menuDos = "Menu Principal.\n";

menuDos += `
1. Sumar.
2. Restar.
3. Multiplicar.
4. Dividir.
5. SALIR.
Por favor ingresar una opción:`

var opcionDos = 0;

while (opcionDos != 5) {

    opcionDos = parseInt(prompt(menuDos));
    alert(`El codigo es ${opcionDos}`);

    switch (opcionDos) {
        case 1: alert(`1. Sumar.`);
            break;
        case 2: alert(`2. Restar.`);
            break;
        case 3: alert(`3. Multiplicar.`);
            break;
        case 4: alert(`4. Dividir.`);
            break;
        case 5: alert(`5. Salir.`);
            break;
        default: alert(`la codigo no exixte!!`)
    }
}


var menuTres = "Menu Principal.\n";

menuTres += `
1. Sumar.
2. Restar.
3. Multiplicar.
4. Dividir.
5. SALIR.
Por favor ingresar una opción:`

var opcionTres = 0;

for (var i=0; opcionTres != 5; i++) {

    opcionTres = parseInt(prompt(menuTres));
    alert(`El codigo es ${opcionTres}`);

    switch (opcionTres) {
        case 1: alert(`1. Sumar.`);
            break;
        case 2: alert(`2. Restar.`);
            break;
        case 3: alert(`3. Multiplicar.`);
            break;
        case 4: alert(`4. Dividir.`);
            break;
        case 5: alert(`5. Salir.`);
            break;
        default: alert(`la codigo no existe!!`)
    }
}

alert(`Numero de veces que se usaron las opciones antes de salir: ${i-1}`);
