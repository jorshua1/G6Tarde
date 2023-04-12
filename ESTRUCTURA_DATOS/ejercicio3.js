/* Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor. */
let notas = new Array(5);
for(i=0;i<notas.length;i++){
    notas[i]=prompt(`ingrese la nota ${i+1}`)
}console.log(notas);
let mayor=0;
LET MENOR;
LET MEDIA=0;
IF (NOTAS[I]>MAYOR)
{
    MAYOR=NOTAS[I]
}
IF(I===0){
    MENOR=NOTAS[I]
}ELSE IF(NOTAS[I]<MENOR){
    MENOR=NOTAS[I]
}
MEDIA+=NOTAS[I]
}
MEDIA=MEDIA/5