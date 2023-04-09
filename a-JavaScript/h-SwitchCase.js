/*
switch
La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, 
y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

Syntaxis
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}

expresión
Es una expresión que es comparada con el valor de cada instancia case.

case valorN
Una instancia case valorN es usada para ser comparada con la expresión. 
Si la expresión coincide con el valorN, las declaraciones dentro de la instancia case 
se ejecutan hasta que se encuentre el final de la declaración switch o hasta encontrar una interrupción break.

default
Una instancia default, cuando es declarada, es ejecutada si el valor de la expresión 
no coincide con cualquiera de las otras instancias case valorN.

Descripción
Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. 
Si la expresión coincide con múltiples entradas, la primera será la seleccionada, incluso si las mayúsculas son tenidas en cuenta.

El programa primero busca la primer instacia case cuya expresión se evalúa 
con el mismo valor de la expresión de entrada (usando comparación estricta (en-US), ===) y 
luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. 
Si no se encuentra una cláusula de case coincidente, el programa busca la cláusula default opcional, y si 
se encuentra, transfiere el control a esa instancia, ejecutando las declaraciones asociadas. 
Si no se encuentra una instancia default el programa continúa la ejecución en la instrucción siguiente al final del switch. 
Por convención, la instancia default es la última cláusula, pero no tiene que ser así.

La declaración break es opcional y está asociada con cada etiqueta de case y asegura que el programa 
salga del switch una vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. 
Si se omite el break el programa continúa la ejecución en la siguiente instrucción en la declaración de switch .

Ejemplos
Usando switch
En el siguiente ejemplo, si expresión se resuelve a "Platanos", el algoritmo compara el valor con el case "Platanos" y 
ejecuta la declaración asociada. Cuando se encuentra un break, el programa sale del condicional switch y ejecuta la 
declaración que lo procede. Si se omite el break, el case "Cerezas" también es ejecutado.
*/
let expr="Uvas"
switch (expr) {
    case 'Naranjas':
        console.log('El kilogramo de naranjas cuesta $0.59.');
        break;
    case 'Manzanas':
        console.log('El kilogramo de manzanas cuesta $0.32.');
        break;
    case 'Platanos':
        console.log('El kilogramo de platanos cuesta $0.48.');
        break;
    case 'Cerezas':
        console.log('El kilogramo de cerezas cuesta $3.00.');
        break;
    case 'Mangos':
    case 'Papayas':
        console.log('El kilogramo de mangos y papayas cuesta $2.79.');
        break;
    default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}

console.log("¿Hay algo más que te quisiera consultar?");
///////////////////////////////////////////////////////////////////////////
let estacion1 = "Primavera";

switch (estacion1) {
    case "Primavera":
    case "Otoño":
    case "Verano":
    case "Invierno":
        console.log("Es la estacion de " + estacion1);
        break;
    default:
        console.log(estacion1 + " no es una estacion.")
}

let estacion = "Enero"; /*parseInt(prompt("Por favor ingrese mes del año que desea consultar estacion teniendo en cuenta su orden en el calendario de  1 al 12: "))*/

switch (estacion) {
    case "Diciembre":
    case "Enero":
    case "febrero":
        console.log("Es la estacion del mes " + estacion + ", es invierno.");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Es la estacion del mes " + estacion + ", es primavera.");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Es la estacion del mes " + estacion + ", es verano.");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Es la estacion del mes " + estacion + ", es otoño.");
        break;
    default:
        console.log(estacion + " no es una estacion.");
}