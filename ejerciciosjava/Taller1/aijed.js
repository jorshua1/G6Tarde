let alto;
let ancho;
let linea;
let cadena;
alto = parseInt(prompt("TECLEA UN NUMERO"));
for(linea = 0; linea < alto; linea++){
    cadena = "";
    for(ancho = 0; ancho <= linea; ancho++){
        cadena += "*";
    }
    console.log(`${cadena}`);
}