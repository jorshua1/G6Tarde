//array numerico

let numerico = new Array();

for (let i=0;i<10;i++){
    numerico[i]=i+1;
}
for (let i=0;i<10;i++){
    console.log(numerico[i]);
}


//operacion de poner al cubo los numeros del arreglo numerico. 

let numericoCubico= new Array();
for (let i=0;i<numerico.length;i++){
    numericoCubico[i]=numerico[i]**3;
}
console.log(numericoCubico)

//agregar valores al arreglo


let insercionDatos= new Array();
for (let i=0;i<10;i++){
    insercionDatos[i]=prompt("Ingrese un valor");
    console.log(`acabo de ingresar al arreglo en la posicion ${i} el valor ${insercionDatos[i]}`);
}
console.log(insercionDatos)

// array de cadena de caracteres
let string = new Array();

for (let i=0;i<=10;i++){
    string[i]="a";
}
for (let i=0;i<=10;i++){
    console.log(string[i]);
}

//array mixto

let mixto = new Array();
for (let i=0;i<=10;i++){
    if (i%2===0){
        mixto[i]=0
    }else{
        mixto[i]="-";
    }
}
for (let i=0;i<=10;i++){
    console.log(mixto[i]);
}
