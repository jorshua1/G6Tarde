let arrayString = new Array("Sergio","Nicolas","Zarela","Felipe","Miguel");
let arrayNumber = [1,2,3,4,5]
let arrayAny = [1,"Sergio",2,"Nicolas",3,"Zarela",4,"Felipe",5,"Miguel"];

let objectSimple = new Object();
objectSimple.nombre = "Miguel";
objectSimple.edad = 18;
objectSimple.genero = "Masculino";
objectSimple.apellido = "Pasachoa";

let objectAnidado = {
    numero: 1,
    anidado: anidacion1 = {
      numero: 2,
      anidado: anidacion2 = {
        numero: 3,
        anidado: anidacion3 = {
            numero: 4,
        }
      }  
    }
}
console.log(arrayAny.length);
console.log(objectAnidado.anidado.anidado.anidado.numero);

let cubica = [];
for(let i=0;i<arrayNumber.length;i++){
    cubica[i] = arrayNumber[i]**3;
    console.log(`El número cúbico de ${arrayNumber[i]} es: ${cubica[i]}`);
}
console.log(cubica);

let agregacion = [];
let valores = Number(prompt("¿Cuántos valores desea agregar?"));

for(let i=0;i<valores;i++){
    agregacion[i] = prompt("Agregue cualquier cosa");
    console.log(agregacion[i]);
}
console.log(agregacion);