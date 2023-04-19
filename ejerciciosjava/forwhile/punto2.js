//Calcula la suma de los cuadrados de los 100 primeros números naturales.
let suma = 0;
let sumaT = 0;
for(i = 1; i <= 100; i++){
    suma = i*i;
    sumaT = suma + sumaT;
    console.log(suma);
    console.log("LA SUMA ES "+ sumaT);
}