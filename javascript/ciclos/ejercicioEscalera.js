let alto = 0;
let ancho = 0;
let linea = 0;
let cadena = 0;
alto = parseInt(prompt("Teclea un número N"));
for(linea=0; linea<alto;linea++){
    cadena=" "
    for(ancho=0; ancho<=linea;ancho++){
        cadena +="*";
    }
    console.log(cadena);
}
