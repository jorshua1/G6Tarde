let notas= new Array(5);
let mayor = 0;
let menor;
let media=0;
for (let i=0; i<5;i++){
    debugger
    notas[i]=Number(prompt("Ingrese una nota entre 0 y 10"));
    while (isNaN(notas[i])||( notas[i])<0 || (notas[i]) >10){
        notas[i]=Number(prompt("Ingrese nuevamente la nota, recuerde que son valores entre 0 y 10"));
    }
    if (notas[i]>mayor){
        mayor = notas[i];
    }
    if (i===0){
        menor= notas[i];
    }else if(notas[i]<menor){
        menor = notas [i];
    }
    media+= notas[i];
}media = media/5;
console.log(
`Las notas que obtuvo el estudiante fueron ${notas}
La nota mayor que obtuvo fue ${mayor}
La nota menor que obtuvo fue ${menor}
La media fue de ${media}
`)