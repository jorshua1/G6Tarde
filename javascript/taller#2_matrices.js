//Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con valores aleatorios 
//(del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo.


vectorNumeros=[]
vectorCuadrado
vectorCubo=[]
for (let i = 0; i < 10; i++) {
    vectorNumeros[i]=Math.floor(Math.random()*10-1)
    
}

console.log("array "+vectorNumeros)

for (let i = 0; i < 10; i++) {
    vectorCuadrado[i]=Math.pow((vectorNumeros[i]),2)
    
}

console.log("array al cuadrado "+vectorNumeros)
for (let i = 0; i < 10; i++) {
    vectorCubo[i]=Math.pow((vectorNumeros[i]),2)
    
}
console.log("array al cubo "+vectorCubo)

