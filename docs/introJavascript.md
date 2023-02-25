# Introduccion a la programacion con javascript
## **Creacion de variables en javascript:**
En programación, una variable es un espacio en la memoria que se reserva para almacenar un valor. Las variables se utilizan para almacenar valores que pueden cambiar a lo largo del tiempo y se utilizan en la mayoría de los programas.

En JavaScript, se pueden crear variables utilizando la palabra clave `var, let o const`


- La palabra clave `var` se usaba antes de la versión ECMAScript 6 (ES6) de JavaScript para declarar una variable. Es una forma de declarar una variable que se puede reasignar y acceder desde cualquier lugar dentro del alcance donde fue declarada.

- La palabra clave `let` y `const` fueron introducidas en ES6 y tienen algunas diferencias importantes con la palabra clave `var`. `let` se usa para declarar una variable que se puede reasignar, pero solo se puede acceder dentro del bloque donde fue declarada. `const` se utiliza para declarar una constante, es decir, una variable que no puede ser reasignada.

Para declarar una variable, simplemente se escribe la palabra clave correspondiente, seguida del nombre de la variable y, opcionalmente, un valor inicial:

```javascript
    var x = 10;
    let y = 20;
    const z = 30;
```
En este ejemplo, se declaran tres variables: x se declara con la palabra clave var y se le asigna el valor 10. y se declara con la palabra clave let y se le asigna el valor 20. z se declara con la palabra clave const y se le asigna el valor 30.

Es importante tener en cuenta que las variables creadas con var tienen un alcance de función o global, mientras que las variables creadas con let y const tienen un alcance de bloque. Esto significa que var puede ser accedida desde cualquier lugar dentro de la función o el ámbito global, mientras que let y const solo pueden ser accedidas dentro del bloque en el que fueron declaradas.

<br>

<br>

## **Tipos de datos:**
En JavaScript, existen varios tipos de datos, incluyendo:

- Tipos de datos primitivos:
    - **number**: números, por ejemplo: 42 o 3.14
    - **string**: cadenas de texto, por ejemplo: "Hola mundo" o '¡Hola! ¿Cómo estás?'
    - **boolean**: valores de verdad, true o false
    - **null**: valor nulo, null
    - **undefined**: valor indefinido, undefined
    - **symbol**: identificador único e inmutable, introducido en ECMAScript 6.

- Tipos de datos compuestos:
    - **object**: objetos, por ejemplo: {nombre: "Juan", edad: 25} o new Date()
    - **array**: arreglos, por ejemplo: [1, 2, 3, 4, 5] o ["rojo", "verde", "azul"]

    <br>
### **Ejemplos:**
```javascript
    // Números / Numbers
    let x = 42;
    let y = 3.14;

    // Cadenas de texto / Strings
    let nombre = "Juan";
    let mensaje = '¡Hola! ¿Cómo estás?';

    // Valores de Booleanos
    let aprobado = true;
    let reprobado = false;

    // Nulo e indefinido / null - undefined
    let nulo = null;
    let indefinido;

    // Objetos / Objects {}
    let persona = { nombre: "Juan", edad: 25 };
    let fecha = new Date();

    // Arreglos / Arrays []
    let numeros = [1, 2, 3, 4, 5];
    let colores = ["rojo", "verde", "azul"];

```
Es importante tener en cuenta que en JavaScript, los tipos de datos son dinámicos, lo que significa que una variable puede contener diferentes tipos de datos en diferentes momentos.

<br>

## **Estructuras de control:**
## **Estructuras repetitivas:**
    