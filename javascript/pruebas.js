

numeroTalentos = parseInt(prompt("Cuntos talentos desea registrar?"))
while (isNaN(numeroTalentos) || numeroTalentos < 0) {
    alert("Por favor dijite un nunmero valido para la cantidad de talentos")
    numeroTalentos = parseInt(prompt("Cuntos talentos desea registrar?"))
}

estudiantes = []
for (let filas = 0; filas < numeroTalentos; filas++) {
    estudiantes[filas] = []
    for (let columnas = 0; columnas < 2; columnas++) {
        if (columnas == 0) {

            estudiantes[filas][columnas] = filas + 1

        } else {

            nombreEstuidiante = prompt("Digite el nombre del estudiante " + filas)
            estudiantes[filas][columnas] = nombreEstuidiante

        }


    }

}


///prueba de hacerle interfaz por consola a una matriz
alert("Talentos Registrados: \n\n" + estudiantes)
console.log(estudiantes)


for (let filas = 0; filas < numeroTalentos; filas++) {
    console.log("[")
    for (let columnas = 0; columnas < 2; columnas++) {
        const elemento = estudiantes[filas][columnas]
        alert(elemento)
    }
    console.log("]")
}


/////////////////////////////////
matriz = []

console.log(typeof matriz)

matriz = [1, 2, "algo"]

console.log(typeof matriz)



/////////////////////////////////
posicion = 0
comparador = 0
notaMayor = 0
notasMision1 = []
numeroTalentos = parseInt(prompt("Cuntos talentos desea registrar?"))

alert("Registrar notas de la MISION 1")
for (let i = 0; i < numeroTalentos; i++) {
    notaMision1 = parseInt(prompt("Ingrese la nota de la MISION 1 para el estudiante con codigo: " + (i + 1)))
    while (isNaN(notaMision1) || notaMision1 < 1 || notaMision1 > 100) {
        alert("Por favor digite una nota valida para el talento")
        notaMision1 = parseInt(prompt("Ingrese la nota de la MISION 1 para el estudiante con codigo: " + (i + 1)))
    }
    notasMision1[i] = notaMision1

}

alert("Notas ingresadas con exito!")





if (notasMision1.length == 0) {
    alert("ERROR: Por favor, registre primero las notas de los estudiantes antes de visualizar")
} else {

    for (let i = 0; i < numeroTalentos; i++) {


        if (notasMision1[i] > comparador) {
            posicion = i
            comparador = notasMision1[i]

        }

    }


}
console.log(notasMision1)

console.log("la nota mayor es " + comparador)
console.log(posicion);



//////////////////////////////////////////////////////////////////////////////////////
numeroMayor = 0
posicion = 0
mejorTalentoMision1 = 0
estudiantes = []
notasMision1 = []
numeroTalentos = parseInt(prompt("Cuntos talentos desea registrar?"))


alert("Registrar Estudiantes")
for (let filas = 0; filas < numeroTalentos; filas++) {
    estudiantes[filas] = []
    for (let columnas = 0; columnas < 2; columnas++) {
        if (columnas == 0) {

            estudiantes[filas][columnas] = (filas + 1)

        } else {

            nombreEstuidiante = prompt("Digite el nombre del estudiante " + (filas + 1))
            while (!isNaN(nombreEstuidiante)) {
                alert("dijite un nombre valido")
                nombreEstuidiante = prompt("Digite el nombre del estudiante " + (filas + 1))
            }
            estudiantes[filas][columnas] = nombreEstuidiante
        }
    }
}

alert("Datos ingresados con exito")



alert("Registrar notas de la MISION 1")
for (let i = 0; i < numeroTalentos; i++) {
    notaMision1 = parseInt(prompt("Ingrese la nota de la MISION 1 para el estudiante con codigo: " + (i + 1)))
    while (isNaN(notaMision1) || notaMision1 < 1 || notaMision1 > 100) {
        alert("Por favor digite una nota valida para el talento")
        notaMision1 = parseInt(prompt("Ingrese la nota de la MISION 1 para el estudiante con codigo: " + (i + 1)))
    }
    notasMision1[i] = notaMision1

}

alert("Notas ingresadas con exito!")




if (notasMision1.length == 0) {
    alert("ERROR: Por favor, registre primero las notas de los estudiantes antes de visualizar")
} else {
    ///////for para recorrer el vector de las notas y sacar la posicion
    for (let i = 0; i < numeroTalentos; i++) {
        if (notasMision1[i] > numeroMayor) {
            posicion = i
            numeroMayor = notasMision1[i]

        }

    }
    //////// for para recorrer la matriz y comparar la posicion para sacar el nombre del estudiante

    posicionfila = 0
    posicioncolumna = 0
    for (let filas = 0; filas < numeroTalentos; filas++) {

        if(filas == posicion){

            prueba=filas

        }

        
    }
}
console.log(estudiantes)
console.log(notasMision1)
console.log(posicionfila);
console.log(posicioncolumna);
console.log(prueba)

console.log("el estudiante con la mayor calificacion es " + mejorTalentoMision1 + "con una calificacion de: " + numeroMayor + "nombre")
console.log("nombre " + estudiantes[prueba][1])



/////
