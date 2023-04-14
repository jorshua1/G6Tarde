/*JavaScript está diseñado en un paradigma simple basado en objetos.
Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.
Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.
Este describe cómo usar objetos, propiedades, funciones y métodos; y cómo crear tus propios objectos.

Visión general sobre Objetos
Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real.
El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.

En JavaScript, un objeto es un entidad independiente con propiedades y tipos.
Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades.
Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc.
Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.

Objetos y propiedades
Un objeto de JavaScript tiene propiedades asociadas a él.
Una propiedad de un objeto se puede explicar como una variable adjunta al objeto.
Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, 
excepto por el nexo con el objeto. Las propiedades de un objeto definen las características del objeto.
Accedes a las propiedades de un objeto con una simple notación de puntos:
*/
let objetoJefphunter ={nombre: "Jefphunter", apellido: "CrownLoved", estadoCivil: "Soltero", nacionalidad: "Colombiano"};
let objetoNumerico = { numeroNegativo: -1, numeroPositivo: 1, numeroRacional: 1.5, numeroIrracional: Math.sqrt(20) };
let objetoMixto = new Object(["Hola", 1, { nombre: objetoJefphunter.nombre }, -15, false, { numeroIrracional: objetoNumerico.numeroIrracional }, null]);
let objetoAnidado={objetoUno:{objetoDos:{ObjetoTres:{objetoCuatro:"Hola"}}}}
let objetoAnidadoDos={objetoJefphunter:{objetoNumerico:{ObjetoMixto:objetoMixto}}}

console.log(objetoJefphunter);
console.log(objetoJefphunter.nombre);
console.log(objetoNumerico["numeroNegativo"]);
console.log(objetoAnidado.objetoUno.objetoDos.ObjetoTres.objetoCuatro);
console.log(objetoAnidadoDos.objetoJefphunter.objetoNumerico.ObjetoMixto);
