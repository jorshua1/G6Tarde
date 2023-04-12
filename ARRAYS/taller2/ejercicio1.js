let vector_numeros=[];
for (let i=0;i<10;i++){
    vector_numeros[i]=Math.floor(Math.random()*(10 - (1)+1)+1)
}
alert("lISTA: " + vector_numeros)
for(let x=0;x<vector_numeros.length;x++){
    cuadrado=(vector_numeros[x]**2)
    cubo=(vector_numeros[x]**3)
    alert(`Posicion ${x}
    Numero: ${vector_numeros[x]}
    cuadrado: ${cuadrado}
    Cubo: ${cubo}
    `)
}