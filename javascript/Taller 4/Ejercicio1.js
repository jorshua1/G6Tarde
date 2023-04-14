let numeros=[];
for (let i = 0; i <10; i++) {
    numeros[i] = Math.floor(Math.random() * 10) + 1;
  }
let cuadrados=[];
for (let i = 0; i <10; i++) {
    cuadrados[i] =  numeros[i]*numeros[i];
}
let cubos=[];
for (let i = 0; i <10; i++) {
    cubos[i] = numeros[i]*numeros[i]*numeros[i];
}
console.log(cubos);
console.log(cuadrados);
console.log(numeros)    