let frase = "Apagar el equipo al terminar";
inicio = 0;
A = 0;
while(inicio <= frase.length){
    if(frase [inicio] === "a" || frase [inicio] === "A"){
        console.log("hay una letra A en la posicion " + inicio);
        A = A+1;

    }
    inicio=inicio+1
}