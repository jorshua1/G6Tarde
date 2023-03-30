
let arregloString = ["Aire", "Tierra", "Fuego", "Agua"];
let arregloMixto = [1, "Aire", 2, "Tierra", 3, "Fuego", 4, "Agua"] ;

//For para arreglo cubico en base del arreglo numerico

let numerico = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let cubica = [];
for (let i = 0; i <= numerico.length-1; i++){

    cubica[i]=numerico[i]**3;
    console.log(`El numero cubico de ${numerico[i]} es: ${cubica[i]}`);
};
console.log(cubica);

//Insertar datos en un array 

let array = [];
let tamañoArray = parseInt(prompt("Ingrese un numero para el tamaño del array"));

while(isNaN(tamañoArray)|| tamañoArray <=0){
    tamañoArray = parseInt(prompt("Ingrese un numero valido para el tamaño del array"));
}

for (let i = 0; i <tamañoArray; i++){

    array[i]=prompt("Ingrese un numero");
    alert(`Acabda de insertar el numero ${array[i]} en la posicion ${i} del arreglo`);
}
alert(`El array completo es ${array}`);



let primerObjeto = {
    nombre: "Nicolas",
    sexo: "Masculino",
    edad: 20,
    estatura: 1.75
}

let PingPongObjeto = {
    mesas: 3,
    equipos: 12,
    jugadores: {
        JuanLuis: 1,
        SantiagoAndre: 2,
        SergioWiler: 3,
        AndresArley: 4,
        NicolasMiguel: 5,
        SamuelDainer: 6,
        CarlosJorshua: 7,
        SergioSebastian: 8,
        BrayanRobinson: 9,
        JohnFarit: 10,
        NeferKarl: 11,
        HaroldJuan: 12
    }
};