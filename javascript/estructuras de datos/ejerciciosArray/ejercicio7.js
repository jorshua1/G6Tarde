let vector1 = new Array(5);
let vector2 = new Array(5);
let vector3 = new Array(5);

for(let i = 0;i<vector1.length;i++){
    vector1[i] = Number(prompt(`Ingrese el valor Nº${i+1} del vector 1.`));
    vector2[i] = Number(prompt(`Ingrese el valor Nº${i+1} del vector 2.`));
    vector3[i] = vector1[i]+vector2[i];
}
console.log(vector1);
console.log(vector2);
console.log(vector3);