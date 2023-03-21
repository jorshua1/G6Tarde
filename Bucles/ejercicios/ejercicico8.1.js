//un zoologico prtende determinar el porcentaje de animales que hay en las siguientes 3 categorias de edades : 0 a 1 año, de mas de 1 año y menos de 3 y de 3 o mas años. el zoologico todabia no esta seguro del animal que estudiara. si se decide por elefantes solo tomara una muestra de 20 de ellos; si se decide por las jirafas, tomara 15 muestras y si se decide por los chimpances tomara 40.

var animal = prompt("Ingrese nombre de animal a estudiar")
while (!isNaN(animal) || animal !== "elefante" || animal !== "jirafa" || animal !== "chimpances"){
    alert("Ingrese valor valido")
    var animal = prompt("Ingrese nombre de animal a estudiar")
}if (animal === "elefante")


