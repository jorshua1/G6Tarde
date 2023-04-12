let vector_numeros = new Array(10)

for(let i= 0;i<vector_numeros.length;i++){
    vector_numeros[i] = Math.floor((Math.random()*10)+1);
    console.log(`Posicion: ${i} - Valor: ${vector_numeros[i]} - Cuadrado: ${vector_numeros[i]**2} - Cubo: ${vector_numeros[i]**3}`)
}