//Arreglos
let number = [2,4,6,8,10];
let asdfg = ["Juan", "Hola", "Uno"];
let mixto = [2000, "Zare", true, null, undefined];
console.log(number[2])
console.log(asdfg[2])
console.log(mixto[2])

//Ciclo para el numero cubico de el arreglo
let cubica = [];
for(i=0; i<number.length; i++){
    cubica[i]=number[i]**3
}
console.log(cubica)
// -_- -_-_- daniel estuvo aqui -_-
//Objeto Sencillo
let taza = {
    color : "Amarrilo",
    profundidad : 0.15,
    marca : "Ajaskbs"
}
console.log(taza.color)

//Objeto anidado
let carro = {
    color : "Rojo",
    marca : "Mazda",
    tamaño : {
        largo : 1.20,
        ancho : 1.50,
    },
    fabricacion : {
        año : 2020,
        empresa : {
            nombre : "asdfgh",
            nit : 900254369,
            gerente : {
                nombreGerente : "Daniel",
                edad : 25,
                numeroCedula : 1009624558,
                educacion : {
                    universidad : "UNN",
                    titulo : "Ing ajksagbdkj",
                    añoDeGraduacion : prompt("Ingrese el año en el que se graduo de la U")
                }
            }
        }
    }
}
console.log(carro.fabricacion.empresa.gerente.educacion.añoDeGraduacion)