/*
Crear una matriz numérica de 3x3 que permita almacenar un número en cada posición y mostrarlos en pantalla.
*/

let cantidadFilas = 3;
let cantidadColumnas = 3;

let matrizUno = new Array(cantidadFilas); 
// Crear matrizUno vacía de 3 filas
console.log(matrizUno);

for (let columnaMatrizUno = 0; columnaMatrizUno < cantidadColumnas; columnaMatrizUno++) {
    matrizUno[columnaMatrizUno] = new Array(cantidadColumnas); 
    // Crear 3 columnas para cada fila
    console.log(matrizUno[columnaMatrizUno]);
}

for (let asignarDatoMatrizUno = 0; asignarDatoMatrizUno < cantidadFilas; asignarDatoMatrizUno++) {

    for (let generarDatoMatrizUno = 0; generarDatoMatrizUno < cantidadColumnas; generarDatoMatrizUno++) {
        let numeroMatrizUno = Math.floor(Math.random() * 100); /*parseInt(prompt(`Ingrese el numero para la posición (${asignarDatoMatrizUno},${generarDatoMatrizUno}):`));*/

        while (isNaN(numeroMatrizUno)) {
            numeroMatrizUno = 0;/* parseInt(prompt(`El numero ingresado no es un número. Ingrese el numero para la posición (${asignarDatoMatrizUno},${generarDatoMatrizUno}) nuevamente:`));*/
        }
        matrizUno[asignarDatoMatrizUno][generarDatoMatrizUno] = numeroMatrizUno;

        console.log(matrizUno[asignarDatoMatrizUno][generarDatoMatrizUno]);
        //Se genera o ingresan los datos a los arreglos.
    }

    console.log(asignarDatoMatrizUno);
    // Se recorren los arreglos y se asignan por posiscion los datos ingresados.
}

for (let mostrarMatrizUno = 0; mostrarMatrizUno < matrizUno.length; mostrarMatrizUno++) {
    console.log(matrizUno[mostrarMatrizUno]);
}



let tamañoMatriz = 3;
let matrizDos = [tamañoMatriz];
// Crean matrizDos vacia para tres filas.
console.log(matrizDos);

for (let asignarDatoMatrizDos = 0; asignarDatoMatrizDos < tamañoMatriz; asignarDatoMatrizDos++) {
    matrizDos[asignarDatoMatrizDos] = [];
    // Crean matrizDos de N columnas.
    console.log(matrizDos);

    for (let generarDatoMatrizDos = 0; generarDatoMatrizDos < tamañoMatriz; generarDatoMatrizDos++) {
        matrizDos[asignarDatoMatrizDos][generarDatoMatrizDos] = Math.floor(Math.random() * 100);

        console.log(matrizDos[asignarDatoMatrizDos][generarDatoMatrizDos]);
        //Se genera o ingresan los datos a los arreglos.
    }

    console.log(asignarDatoMatrizDos);
    // Se recorren los arreglos y se asignan por posiscion los datos ingresados.
}

for (let mostrarMatrizDos = 0; mostrarMatrizDos < tamañoMatriz; mostrarMatrizDos++) {
    console.log(matrizDos[mostrarMatrizDos]);
}



let cantidadFilasTres = 3;
let cantidadColumnasTres = 3;

let matrizTres = new Array(cantidadFilasTres).fill().map(() => new Array(cantidadColumnasTres).fill(0));
// Crean matrizTres de 3 filas y 3 columnas con valor cero
console.log(matrizTres);

for (let asignarDatoMatrizTres = 0; asignarDatoMatrizTres < cantidadFilasTres; asignarDatoMatrizTres++) {

    for (let generarDatoMatrizTres = 0; generarDatoMatrizTres < cantidadColumnasTres; generarDatoMatrizTres++) {
        let numeroMatrizTres = Math.floor(Math.random() * 100);

        while (isNaN(numeroMatrizTres)) {
            numeroMatrizTres = 0;
        }
        matrizTres[asignarDatoMatrizTres][generarDatoMatrizTres] = numeroMatrizTres;

        console.log(matrizTres[asignarDatoMatrizTres][generarDatoMatrizTres]);
        //Se genera o ingresan los datos a los arreglos. 
    }

    console.log(asignarDatoMatrizTres);
    // Se recorren los arreglos y se asignan por posiscion los datos ingresados.
}

for (let mostrarMatrizTres = 0; mostrarMatrizTres < cantidadFilas; mostrarMatrizTres++) {
    console.log(matrizTres[mostrarMatrizTres]);
}