let samsung = 0, iphone = 0, xiaomi = 0, motorola = 0, huawey = 0, oppo = 0, i = 0;

alert("Bienvenid@ Vamos a ingresar en el siguiente orden las marcas \n Samsung \n Iphone \n Xiamomi \n Motorola \n Huawey \n Oppo");
samsung = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Samsung a registrar"));
while ((samsung < 1) || (isNaN(samsung))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    samsung = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Samsung a registrar"));
}
let precioUnidadSamsung = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Samsung"));
while ((precioUnidadSamsung < 1) || (isNaN(precioUnidadSamsung))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    precioUnidadSamsung = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Samsung"));
}
iphone = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Iphone a registrar"));
while ((iphone < 1) || (isNaN(iphone))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    iphone = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Iphone a registrar"));
}
let precioUnidadIphone = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Iphone"));
while ((precioUnidadIphone < 1) || (isNaN(precioUnidadIphone))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    precioUnidadIphone = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Iphone"));
}
xiaomi = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Xiaomi a registrar"));
while ((xiaomi < 1) || (isNaN(xiaomi))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    xiaomi = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Xiaomi a registrar"));
}
let precioUnidadXiaomi = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Xiaomi"));
while ((precioUnidadXiaomi < 1) || (isNaN(precioUnidadXiaomi))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    precioUnidadXiaomi = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Xiaomi"));
}
motorola = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Motorola a registrar"));
while ((motorola < 1) || (isNaN(motorola))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    motorola = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Motorola a registrar"));
}
let precioUnidadMotorola = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Motorola"));
while ((precioUnidadMotorola < 1) || (isNaN(precioUnidadMotorola))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    precioUnidadMotorola = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Motorola"));
}
huawey = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Huawey a registrar"));
while ((huawey < 1) || (isNaN(huawey))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    huawey = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Huawey a registrar"));
}
let precioUnidadHuawey = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Huawey"));
while ((precioUnidadHuawey < 1) || (isNaN(precioUnidadHuawey))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    precioUnidadHuawey = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Huawey"));
}
oppo = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Oppo a registrar"));
while ((oppo < 1) || (isNaN(oppo))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    oppo = Number(prompt("Por favor ingrese la cantidad de Celulares de la marca Oppo a registrar"));
}
let precioUnidadOppo = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Oppo"));
while ((precioUnidadOppo < 1) || (isNaN(precioUnidadOppo))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    precioUnidadOppo = Number(prompt("Por favor ingrese el valor de venta por Unidad de la Marca Oppo"));
}

//Area de Ventas

alert("Bienvenid@ Al area de Ventas les recordamos los precios de las unidades disponibles son:  \n Samsung " + "$ " + precioUnidadSamsung +  "\n Iphone " + "$ " + precioUnidadIphone + "\n Xiaomi " + "$ " + precioUnidadXiaomi  + "\n Motorola " + "$ " + precioUnidadMotorola + "\n Huawey " + "$ " + precioUnidadHuawey + "\n Oppo " + "$ " + precioUnidadOppo);

let ventasSamsung = Number(prompt("Por favor ingrese la cantidad de celulares de Samsung que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
while ((ventasSamsung < 0) || (isNaN(ventasSamsung))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    ventasSamsung = Number(prompt("Por favor ingrese la cantidad de celulares de Samsung que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
}
samsung = (samsung - ventasSamsung);
let totalpagarSamsung = (ventasSamsung * precioUnidadSamsung);
alert("El total a pagar por sus " + ventasSamsung + " Celulares comprados de la Marca Samsung son: " + "$ " + totalpagarSamsung);
alert("La Cantidad de Moviles Disponibles de Marca Samsung que quedan son: " + samsung);

// Iphone

let ventasIphone = Number(prompt("Por favor ingrese la cantidad de celulares de Iphone que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
while ((ventasIphone < 0) || (isNaN(ventasIphone))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    ventasIphone = Number(prompt("Por favor ingrese la cantidad de celulares de Iphone que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
}
iphone = (iphone - ventasIphone);
let totalpagarIphone = (ventasIphone * precioUnidadIphone);
alert("El total a pagar por sus " + ventasIphone + " Celulares comprados de la Marca Iphone son: " + "$ " + totalpagarIphone);
alert("La Cantidad de Moviles Disponibles de Marca Iphone que quedan son: " + iphone);

// Xiaomi

let ventasXiaomi= Number(prompt("Por favor ingrese la cantidad de celulares de Xiaomi que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
while ((ventasXiaomi < 0) || (isNaN(ventasXiaomi))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    ventasXiaomi = Number(prompt("Por favor ingrese la cantidad de celulares de Xiaomi que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
}
xiaomi = (xiaomi - ventasXiaomi);
let totalpagarXiaomi = (ventasXiaomi * precioUnidadXiaomi);
alert("El total a pagar por sus " + ventasXiaomi + " Celulares comprados de la Marca Xiaomi son: " + "$ " + totalpagarXiaomi);
alert("La Cantidad de Moviles Disponibles de Marca Xiaomi que quedan son: " + xiaomi);

// Motorola

let ventasMotorola = Number(prompt("Por favor ingrese la cantidad de celulares de Motorola que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
while ((ventasMotorola < 0) || (isNaN(ventasMotorola))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    ventasMotorola = Number(prompt("Por favor ingrese la cantidad de celulares de Motorola que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
}
motorola = (motorola - ventasMotorola);
let totalpagarMotorola = (ventasMotorola * precioUnidadMotorola);
alert("El total a pagar por sus " + ventasMotorola + " Celulares comprados de la Marca Motorola son: " + "$ " + totalpagarMotorola);
alert("La Cantidad de Moviles Disponibles de Marca Motorola que quedan son: " + motorola);

// Huawey

let ventasHuawey = Number(prompt("Por favor ingrese la cantidad de celulares de Huawey que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
while ((ventasHuawey < 0) || (isNaN(ventasHuawey))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    ventasHuawey = Number(prompt("Por favor ingrese la cantidad de celulares de Huawey que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
}
huawey = (huawey - ventasHuawey);
let totalpagarHuawey = (ventasHuawey * precioUnidadHuawey);
alert("El total a pagar por sus " + ventasHuawey + " Celulares comprados de la Marca Huawey son: " + "$ " + totalpagarHuawey);
alert("La Cantidad de Moviles Disponibles de Marca Huawey que quedan son: " + huawey);

// Oppo

let ventasOppo= Number(prompt("Por favor ingrese la cantidad de celulares de Oppo que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
while ((ventasOppo < 0) || (isNaN(ventasOppo))) {
    alert("Lea Atentamente las opciones,intentelo de nuevo.");
    ventasOppo = Number(prompt("Por favor ingrese la cantidad de celulares de Oppo que quiere comprar en numero \n  Nota: Aclarar que si no desea comprar de la marca puede marcar el # 0 Gracias"));
}
oppo = (oppo - ventasOppo);
let totalpagarOppo = (ventasOppo * precioUnidadOppo);
alert("El total a pagar por sus " + ventasOppo + " Celulares comprados de la Marca Oppo son: " + "$ " + totalpagarOppo);
alert("La Cantidad de Moviles Disponibles de Marca Oppo que quedan son: " + oppo);

let sumatotal = (totalpagarSamsung+totalpagarIphone+totalpagarXiaomi+totalpagarMotorola+totalpagarHuawey+totalpagarOppo);

alert("El total de Unidades de Samsung vendidos fueron: " +ventasSamsung + "El total recaudado de las ventas de Samsung fueron: "  +totalpagarSamsung + "\n El total de Unidades de Iphone vendidos fueron: " + ventasIphone + "\n El total recaudado de las ventas de Iphone fueron: "  + totalpagarIphone + "\n El total de Unidades Xiaomi vendidos fueron: " + ventasXiaomi + "\n El total recaudado de las ventas de Xiaomi fueron: "  + totalpagarXiaomi + " \n El total de Unidades Motorola vendidos fueron: " + ventasMotorola + "\n El total recaudado de las ventas Motorola fueron: " + totalpagarMotorola + "\n El total de Unidades Huawey fueron: " + ventasHuawey + "\n El total recaudado de ventas Huawey fueron: " + totalpagarHuawey + "\n El total de unidades vendidas de Oppo fueron: " + ventasOppo + "\n El total recaudado de las ventas de Oppo fueron: " + totalpagarOppo);

alert("El total de Dinero recaudado en las ventas fueron: " +"$ " + sumatotal);