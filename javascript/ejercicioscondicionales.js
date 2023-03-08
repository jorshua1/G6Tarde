diametro = parseFloat(prompt("porfavor digite el diametro de la rueda"));

if (diametro > 1.4) {

    console.log("la rueda del vehiculo es de un vehiculo grande")

} else if (diametro <= 1.4 && diametro > 0.8) {
    console.log("la rueda del vehiculo es de un vehiculo mediano")
} else if (diametro < 0.8) {
    console.log("no wa mostrar nada")
}




palabrta = prompt("dijite su palabra")

if (palabrta == "holas") {
    console.log("las palabras son iguales")
} else {
    console.log("las palabras no son iguales")

} if (palabrta == parseFloat(palabrta)) {
    console.log(+palabrta + " es un numeros")
}

//una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% a 
//la compra, por compras mayores o iguales a 200000 da un 20 % a la compra, si la compra es 
//menor a 200000 no hay descuento y toca notificarle al usuario, si la compra es menor a 50000
//agregar 2000 por Parqueadero

compra = parseInt(prompt("digite el precio de la compra"));

if (compra >= 250000) {
    dcto = compra * (30 / 100)
    total = compra - dcto;
    console.log("dcto: " + dcto)
    console.log("por su compra se le ha otorgado un dcto del 30% su total a pagar es: " + total)

} else if (compra >= 200000) {
    dcto = compra * (20 / 100)
    total = compra - dcto;
    console.log("dcto: " + dcto)
    console.log("por su compra se le ha otorgado un dcto del 20% su total a pagar es: " + total)

} else if (compra < 200000 && compra >= 50000) {

    console.log("el dcto solo esta disponible para compras mayores a 200000")

} else if (compra < 50000) {
    total = compra + 2000;
    console.log("se a adicionado a su compra 2000 de recargo del parqueadero, el total a pagar es: " + total)
}


//determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero
lado1 = parseInt(prompt("digite el lado 1 del triangulo: "))
lado2 = parseInt(prompt("digite el lado 1 del triangulo: "))
lado3 = parseInt(prompt("digite el lado 1 del triangulo: "))

if (lado1 == lado2 && lado2 == lado3) {

    console.log("su triangulo es equilatero")

} else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {

    console.log("su triangulo es isoceles")

} else if (lado1 != lado2 != lado3) {

    console.log("su triangulo es escaleno")

}

//crear un algoritmo que compruebe la estacion en la que se encuentra un mes, para saber si el mes esta en verano, 
//otoño, primavera, invierno.

mes = parseInt(prompt("dijite el numero del mes del que desea conocer la estacion"))

if (mes == 12 || mes == 1 || mes == 2) {
    console.log("su estacion es Invierno")
} else if (mes == 3 || mes == 4 || mes == 5) {
    console.log("su estacion es Primavera")
} else if (mes == 6 || mes == 7 || mes == 8) {
    console.log("su estacion es Verano")
} else if (mes == 9 || mes == 10 || mes == 11) {
    console.log("su estacion es Otoño")
} else if (mes <= 0 || isNaN(mes) || mes > 12) {
    console.log("porfavor digite un numero valido para un mes")
    console.log("los numeros para los meses deben estar entre 1 y")
}

//Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o 
//superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales
// y muestre por pantalla si el usuario tiene que tributar o no.

edad = parseInt(prompt("digite su edad"))
ingresos = parseInt(prompt("digite su ingreso"))

if (isNaN(edad) || isNaN(ingresos) || edad <= 0 || edad >= 110) {

    console.log("digite una edad valida o un digito de ingresos valido")

} else if (edad >= 16 && ingresos >= 1000) {

    console.log("su merce puede tributar")

} else {

    console.log("su merce no puede tributar")

}


//Se necesita registrar el género de la persona que ingresé; el cuál solo acepte, hombre, mujer e 
//indefinido además debe leerlos tanto la palabra en mayúscula y en minúscula, 
//además solo deberá leer esos tres géneros en caso de agregar algo que no sea eso deberá aparecer un 
//mensaje que diga "dijite un valor válido", y si ha ingresado el género dar un mensaje con el género que ingreso

genero = prompt("digite su genero (hombre, mujer o indefinido)")
if (genero == "Hombre" || genero.toUpperCase() == "HOMBRE" || genero.toLowerCase() == "hombre") {
    console.log("usted es:" + genero)
} else if (genero == "Mujer" || genero.toUpperCase() == "MUJER" || genero.toLowerCase() == "mujer") {
    console.log("usted es:" + genero)
} else if (genero == "Indefinido" || genero.toUpperCase() == "INDEFINIDO" || genero.toLowerCase() == "indefinido") {
    console.log("usted es:" + genero)
} else {
    console.log("genero invalido")
}

//Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre.
//El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N 
//y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y 
//muestre por pantalla el grupo que le corresponde. 

setzo = prompt("Digite el Setzo: Mujer (M) y Hombre (H)")
nombre = prompt("Digite el nombre del estudiante")


if (setzo == "M") {
    if (nombre.charAt(0) == "a" || nombre.charAt(0) == "b" || nombre.charAt(0) == "c" || nombre.charAt(0) == "d" || nombre.charAt(0) == "e" || nombre.charAt(0) == "f" || nombre.charAt(0) == "g" ||
        nombre.charAt(0) == "h" || nombre.charAt(0) == "i" || nombre.charAt(0) == "j" || nombre.charAt(0) == "k" || nombre.charAt(0) == "l" || nombre.charAt(0) == "m") {

        console.log("su merce pretenece al grupo A")

    } else if (nombre.charAt(0) == "n" || nombre.charAt(0) == "ñ" || nombre.charAt(0) == "o" || nombre.charAt(0) == "p" || nombre.charAt(0) == "q" || nombre.charAt(0) == "r"
        || nombre.charAt(0) == "s" || nombre.charAt(0) == "t" || nombre.charAt(0) == "u" || nombre.charAt(0) == "v" || nombre.charAt(0) == "w" || nombre.charAt(0) == "x" || nombre.charAt(0) == "y"
        || nombre.charAt(0) == "z") {

        console.log("su merce pertenece al grupo B")

    } else if (setzo != "M")

        console.log("Porfavor digite setzo valido (M o H)")
}

if (setzo == "H") {
    if (nombre.charAt(0) == "n" || nombre.charAt(0) == "ñ" || nombre.charAt(0) == "o" || nombre.charAt(0) == "p" || nombre.charAt(0) == "q" || nombre.charAt(0) == "r" || nombre.charAt(0) == "s" ||
        nombre.charAt(0) == "t" || nombre.charAt(0) == "u" || nombre.charAt(0) == "v" || nombre.charAt(0) == "w" || nombre.charAt(0) == "x" || nombre.charAt(0) == "y" || nombre.charAt(0) == "z") {

        console.log("su merce pretenece al grupo A")

    } else if (nombre.charAt(0) == "a" || nombre.charAt(0) == "b" || nombre.charAt(0) == "c" || nombre.charAt(0) == "d" || nombre.charAt(0) == "e" || nombre.charAt(0) == "f" || nombre.charAt(0) == "g" ||
        nombre.charAt(0) == "h" || nombre.charAt(0) == "i" || nombre.charAt(0) == "j" || nombre.charAt(0) == "k" || nombre.charAt(0) == "l" || nombre.charAt(0) == "m") {

        console.log("su merce pertenece al grupo B")

    } else if (setzo != "H")

        console.log("Porfavor digite setzo valido (M o H)")

}

//Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes, 
//que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto,
// y si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. 
//La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente.

monto = parseInt(prompt("digite el monto total"));

if (monto < 50000 && monto > 0) {
    dcto = monto * (3 / 100)
    total = monto + dcto;
    console.log("cuota: " + dcto)
    console.log("el total a pagar sera de: " + total)

} else if (monto > 50000) {
    dcto = monto * (2 / 100)
    total = monto + dcto;
    console.log("cuota: " + dcto)
    console.log("el total a pagar sera de: " + total)

} else if (monto == 50000) {

    console.log("su merce no debe pagar cuota")

} else if (monto <= 0) {
    console.log("porfavor ingrese un monto valido")
}

//Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
//donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
//sabiendo el número de artículos y el precio de un articulo.

productos = parseInt(prompt("digite el valor del articulo"))
cantidad = parseInt(prompt("digite la cantidad de los articulos"))

total = productos * cantidad


if (total >= 40) {
    console.log("el total es superior a 40 euros")
    totalt = total * (15 / 100)
    totald = total - totalt
    console.log("el total a pagar es: " + totald)
} else {
    console.log("el total no es superior a 40 euros" + total)
}

// Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio 
//que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada.
//Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.



edad = parseInt(prompt("porfavor dijite su edad"));
if (edad <= 0 || isNaN(edad) || edad >= 100) {

    console.log("porfavor digite una edad valida")

} else {

    if (edad >= 1 && edad <= 4) {

        console.log("su merce no debe pagar entrada")

    } else if (edad >= 5 && edad <= 18) {

        console.log("su merce debe pagar 5$")

    } else if (edad >= 19) {

        console.log("su merce debe pagar 10$")

    }
}

//Crear un programa que me identifique a cual categoría de natación pertenece una persona según su estatura, 
//teniendo en cuenta que para las mujeres estaría representado de la siguiente manera: Hasta 1m de altura pertenece a la categoría Junior, 
//luego hasta 1,60m su categoría es Media y mas de 1.60 pertenece a Adultos. Para los hombres esta representada de la siguiente manera: Hasta 1,2m de altura pertenece
// a la categoría Junior, luego hasta 1,70m su categoría es Media y mas de 1.70m pertenece a Adultos. Para los hombres esta representada de la siguiente manera.

estatura = parseInt(prompt("porfavor dijite su estatura"));
genero = prompt("porfavor dijite su genero (M para mujer y H para Hombre)")


if (genero == "M") {
    if (estatura <= 0 || isNaN(estatura) || estatura >= 3) {

        console.log("porfavor digite una estatura valida")

    } else if (estatura >= 0.1 && estatura <= 1) {

        console.log("su categoria es junior")

    } else if (estatura >= 1.1 && estatura <= 1.60) {

        console.log("su categoria es media")

    } else if (estatura >= 1.61) {

        console.log("su categoria es adulto")

    }
} else if (genero == "H") {
    if (estatura <= 0 || isNaN(estatura) || estatura >= 3) {

        console.log("porfavor digite una estatura valida")

    } else if (estatura >= 0.1 && estatura <= 1.2) {

        console.log("su categoria es junior")

    } else if (estatura >= 1.3 && estatura <= 1.70) {

        console.log("su categoria es media")

    } else if (estatura >= 1.71) {

        console.log("su categoria es adulto")

    }

} else if (genero != "M" || genero != "H") {

    console.log("porfavor digite un genero valido (M para mujer y H para Hombre)");

}


//realice un algoritmo con el que segun su edad y su indice de masa corporal
//indique si su peso es normal, tiene sobre peso, tiene obesidad  


peso = parseInt(prompt("porfavor dijite su peso"));
estatura = parseFloat(prompt("porfavor dijite su estatura"));

console.log(estatura)
esta = estatura ** 2
console.log(esta)
imc = (peso) / (estatura ** 2)

console.log("su IMC es: " + imc)


if (peso <= 0 || isNaN(peso)) {

    console.log("digite un peso valido");

} else if (estatura <= 0 || isNaN(estatura)) {
    console.log("digite una estatura valida");
} else {

    if (imc > 0 && imc <= 18.5) {

        console.log("usted esta bajo de peso");

    } else if (imc > 18.5 && imc <= 24.9) {

        console.log("usted esta normal en su peso");

    } else if (imc > 24.9 && imc <= 30) {

        console.log("usted esta en sobre peso");

    } else if (imc > 30) {

        console.log("usted esta padeciendo de obecidad");

    }
}

/*"Realice un algoritmo que permita calcular el precio que tiene transportar un paquete de un lugar a otro,  
dependiendo de su peso y su lugar de destino, cumpliendo las siguientes condiciones: 
1. La empresa no transporta paquetes con un peso superior a los 5kg. 
2. Los precios por kilogramo varía dependiendo del lugar al que se diriga el paquete, 
los precios son los siguientes: 
América del Norte 24$ por cada 1kg -- 
América Central 20$ por cada 1kg --
América del Sur 21$ por cada 1kg -- 
Europa 10$ por cada 1kg
Asia 18$ por cada 1kg
El mensaje que debe recibir el usuario es el precio del transporte del paquete o dado el caso, 
que se ha rechazado por exceso de peso."*/

lugar = (prompt("Ingrese el continente donde se enviará el pedido"));
peso = Number(prompt("Ingrese el peso en kg"));
if (isNaN(peso)) {
    console.log("¡ERROR!");
} else if (peso > 5) {
    console.log("El peso excede las condiciones de la empresa");
} else if (lugar == "America del Norte") {
    valor = peso * 24
    console.log("Su valor a pagar es: " + valor);
} else if (lugar == "America del Central") {
    valor = peso * 20
    console.log("Su valor a pagar es: " + valor);
} else if (lugar == "America del Sur") {
    valor = peso * 21
    console.log("Su valor a pagar es: " + valor);
} else if (lugar == "Europa") {
    valor = peso * 10
    console.log("Su valor a pagar es: " + valor);
} else if (lugar == "Asia") {
    valor = peso * 18
    console.log("Su valor a pagar es: " + valor);
}

//Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función
//ff del helado que elija.

//El helado sin topping cuesta 1.90$.
//El topping de oreo cuesta 1$.
//El topping de KitKat cuesta 1.50$.
//El topping de brownie cuesta 0.75$.
//El topping de lacasitos cuesta 0.95$.
//En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. 
//» y a continuación informar del precio del helado sin ningún topping.0
//Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).





