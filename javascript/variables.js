let cadena = "Esto es un string";
let entero = 155;
let decimal = 152.54;
console.log(typeof decimal);
let verdad = true; // true/false
let nulo = null;
let indefinido;
let objeto = {nombre : "Miguel",
              cedula: 1098777777,
            acceso: true}

console.log(objeto["nombre"])

let arreglo = [1, "hola", {nombre: "miguel"}, false, null]
arreglo[1] = "usted me cae mal"
console.log(arreglo[1])


objeto.nombre="sergio"
console.log(objeto.nombre)

console.log(Math.floor(Math.random()*27))


let num1 = 3;
let num2 = 4;

let suma = num1 + num2;

console.log(suma);

let resta = num1 - num2;
console.log(resta);

let division = num1 / num2;

console.log (division)

let modeado = num2%num1;

console.log(modeado);
let h="hola ";
let m="mundo";
let hm=h+=m;
console.log(hm)

let exp = num1**num2;
console.log(exp) 

let mult = num1 * num2;
console.log (mult)


console.log(--num1)

let comparacion = num1==num2;
console.log(comparacion)

console.log(num1!=num2)

console.log(num1 === num2)
console.log(num1!== num2 )

console.log(++num1)
console.log(num1<=num2)
console.log(num1>=num2)
console.log(num1>num2)
console.log(num1<num2)
console.log(true && false)
console.log(num1<num2||false)
console.log(!false)
x = 10;
x = x / 5;
console.log(x)
console.log (x*=3)
x=2
x=x*3
console.log(x)
console.log(x/=4)
console.log(x-=5)
console.log(x**=2)
console.log(x+=5)
console.log(x%=num2)
var NumeroPorTeclado = parseInt(prompt("Ingrese un numero"));
var variable = ""
variable = prompt("ingrese su nombre")