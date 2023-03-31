saludo= "hola"
saludo [0]="k"
console.log(saludo);


let numeros = [1,2,3,4];
let transporte = ["carros", "motos"];
let any = [transporte,numeros];

var autor = {
    nombre: 'Santiago Posteguillo',
    libros: [
      {titulo: 'Africanus, el hijo del cónsul',
        trilogia:'Escipion'},
      { titulo: 'Las Legiones Malditas',
        trilogia:'Escipion'
      }
    ]
  }

console.log(autor.nombre);
console.log(autor.libros[0].titulo);


// Ejercicio. la palabra reservada Length sirve para cuando no sabemos la cantidad del array.

let cubica = []

for(let i=0;i<numeros.length;i++){
    cubica [i]=numeros[i]**3;
};

console.log("El numero del cubico: " + "es " + numeros + "\n" + " y sus cubicos son: " + cubica);

// Ejercicio #2.

let cubicos = []
let numcubicos=[]

let numeroscubicos = Number(prompt("Ingrese la cantidad de numeros que quiere calcular"));
for(let i=0;i<numeroscubicos;i++){
    cubicos [i]=Number(prompt("Ingrese los numeros a sacar raiz"));
    numcubicos[i]=cubicos [i]**3
    console.log("El numero del cubico: " + cubicos[i] + " es " + numcubicos[i]);
};


