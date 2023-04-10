let tamañoVector = parseInt(prompt("Ingrese el tamaño de su vector"));
let vector = [];
let numero;
let aaa = true;
for(i=0; i<tamañoVector; i++){
    numero = parseFloat(prompt("Ingrese su numero "+i));
    vector[i]=numero;
}
while(aaa){
    aaa=false
    for(i=0; i<vector.length; i++){
        if(vector[i]>vector[i+1]){
            let nuevaPosicion = vector[i]
            vector[i]=vector[i+1]
            vector[i+1]=nuevaPosicion;
            aaa= true
        }
    }
}
console.log(vector)