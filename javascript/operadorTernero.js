//operador ternario
nombre=prompt("ingrese el nombre")

saludo= nombre===""? "ingrese un nombre valido" : "Hola "+nombre;
console.log(saludo)

//imprimir un numero par o impar con operaciones de terneros

num=parseInt(prompt("ingrese un numero"))

rta= num=isNaN(num) || num===""? "ingrese un numero valido": num %2 ==0 ? "el numero es par":"el numero no es par por ende es impar "
console.log(rta)