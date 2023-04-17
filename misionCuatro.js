const datos=[],misiones=[];let talentos,nombre,codigo,nota,opcion;
do{
opcion=parseInt(prompt(`MENU
1.Cantidad de Talentos N.
2.Datos de Talentos N.
3.Registrar nota Mision 1.
4.Registrar nota Mision 2.
5.Registrar nota Mision 3.
6.Registrar prueba de nivel final.
7.Talento mejor nota Mision 1.
8.Talento mejor nota Mision 2.
9.Talento mejor nota Mision 3.
10.Promedio de cada talento.
11.Mostrar notas de cada talento.
12.Acerca del Autor.
13.Salir.`));
switch(opcion){ 
case 1:
if(talentos===undefined){
talentos=parseInt(prompt("Digite la cantidad de Talentos a evaluar"));
while((talentos<1)||isNaN(talentos)){
alert(`DIGITOS INVALIDOS`);
talentos=parseInt(prompt("Digite la cantidad de Talentos a evaluar"));
}
}else{
alert("¡¡ERROR!! Ya se ingreso una cantidad de Talentos");
}
break;
case 2:
if((talentos!==undefined)&&(datos.length===0)){
for(let i=0;i<talentos;i++){
datos[i]=[];
for(let x=0;x<1;x++){
codigo=parseInt(prompt(`Digite el codigo del talento ${i+1}`));
while((codigo<0)||isNaN(codigo)){
alert("CODIGO INVALIDO");
codigo=parseInt(prompt(`Digite el codigo del talento ${i+1}`));
for(let b=0;b<datos.length;b++){
while(codigo===datos[b][0]){
alert("CODIGO REPETIDO");
codigo=parseInt(prompt(`Digite el codigo del talento ${i+1}`)); 
} 
}
}
for(let c=0;c<datos.length;c++){
while(codigo===datos[c][0]){
alert("CODIGO REPETIDO");
codigo=parseInt(prompt(`Digite el codigo del talento ${i+1}`));
}
while((codigo<0)||isNaN(codigo)){
alert("CODIGO INVALIDO");
codigo=parseInt(prompt(`Digite el codigo del talento ${i+1}`));
}
}
datos[i][0]=codigo;
nombre=prompt(`Digite el nombre del talento ${i+1}`);
while(!isNaN(nombre)){
alert("DIGITOS INVALIDOS");
nombre=prompt(`Digite el nombre del talento ${i+1}`);
}
datos[i][1]=nombre;
}
}
}else{
alert("¡¡ERROR!! No se ha ingresado un numero de Talentos o Ya se ingresaron los datos de los Talentos");
}
break;
case 3:
if((talentos!==undefined)&&(misiones.length===0)){
for(let k=0;k<talentos;k++){
misiones[k]=[];
for(let r=0;r<1;r++){
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Mision 1`));   
while((nota<1 || nota>100)||isNaN(nota)){
alert("¡¡ERROR!! Nota Invalida");
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Mision 1`));  
}
misiones[k][0]=nota;
}  
}}else{
alert("¡¡ERROR!! No se ha ingresado un numero de Talentos o Ya se ingresaron las notas de la Mision 1 de los Talentos");
}
break;
case 4:
if((talentos!==undefined)&&(misiones.length>0)){
for(let k=0;k<talentos;k++){
if(misiones[k][1]===undefined){
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Mision 2`));   
while((nota<1 || nota>100)||isNaN(nota)){
alert("¡¡ERROR!! Nota Invalida");
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Mision 2`));   
}
misiones[k][1]=nota;
}else{
alert("¡¡ERORR!! Ya se ingresaron notas de la Mision 2 para los Talentos");
}
}
}else{
alert("¡¡ERROR!! No se ha ingresado un numero de Talentos o No ha ingresado las notas de los Talentos para la Mision 1");
} 
break;
case 5:
if((talentos!==undefined)&&(misiones.length>0)){
for(let k=0;k<talentos;k++){
if(misiones[k][2]===undefined){
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Mision 3`));
while((nota<1 || nota>100)||isNaN(nota)){
alert("¡¡ERROR!! Nota Invalida");
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Mision 3`));   
}
misiones[k][2]=nota;
}else{
alert("¡¡ERORR!! Ya se ingresaron notas de la Mision 3 para los Talentos"); 
}
}
}else{
alert("¡¡ERROR!! No se ha ingresado un numero de Talentos o No ha ingresado las notas de los Talentos para las Misiones 1 / 2");
}  
break;
case 6:
if((talentos!==undefined)&&(misiones.length>0)){
for(let k=0;k<talentos;k++){
if(misiones[k][3]===undefined){
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Prueba de Nivel Final`));
while((nota<1 || nota>100)||isNaN(nota)){
alert("¡¡ERROR!! Nota Invalida");
nota=parseInt(prompt(`Digite la nota del Talento ${k+1} para la Prueba de Nivel Final`));   
}
misiones[k][3]=nota;
}else{
alert("¡¡ERORR!! Ya se ingresaron notas de la Prueba Final para los Talentos");
}
} 
}else{
alert("¡¡ERROR!! No se ha ingresado un numero de Talentos o No ha ingresado las notas de los Talentos para las Misiones 1 / 2 / 3");
}   
break;
case 7:
let mayor=0,name;
for(let k=0;k<talentos;k++){
if((datos[k][1]!==undefined)&&(misiones[k][0]!==undefined)){
if(misiones[k][0]>mayor){
mayor=misiones[k][0]; 
name=datos[k][1];   
}
}else{
alert("¡¡ERROR!! Faltan Datos");
}
}
if(mayor>0){
console.log(`La mejor nota de la Mision 1 es la del Talento:
Nombre Talento: ${name}
Nota Mision 1 :${mayor}`);
}else{
alert("¡¡ERROR!! Faltan Datos");
}
break;
case 8:
let major=0,nane;
for(let k=0;k<talentos;k++){
if((datos[k][1]!==undefined)&&(misiones[k][1]!==undefined)){
if(misiones[k][1]>major){
major=misiones[k][1]; 
nane=datos[k][1];   
}
}else{
alert("¡¡ERROR!! Faltan Datos");
}
}
if(major>0){
console.log(`La mejor nota de la Mision 2 es la del Talento:
Nombre Talento: ${nane}
Nota Mision 2 :${major}`);
}else{
alert("¡¡ERROR!! Faltan Datos");
}break;
case 9:
let mallor=0,nombe;
for(let k=0;k<talentos;k++){
if((datos[k][1]!==undefined)&&(misiones[k][2]!==undefined)){
if(misiones[k][2]>mallor){
mallor=misiones[k][2]; 
nombe=datos[k][1];   
}
}else{
alert("¡¡ERROR!! Faltan Datos");
}
}
if(mallor>0){
console.log(`La mejor nota de la Mision 3 es la del Talento:
Nombre Talento: ${nombe}
Nota Mision 3 :${mallor}`);
}else{
alert("¡¡ERROR!! Faltan Datos");
}break;
case 10:
for(let k=0;k<talentos;k++){
let promedio=0;
for(let i=0;i<4;i++){
if((datos[k][1]!==undefined)&&(misiones[k][i]!==undefined)){
promedio=(misiones[k][i])+(promedio);
}else{
alert("¡¡ERROR!! Faltan Datos");
}
}
promedio=(promedio)/(4);
misiones[k][4]=promedio;
}
for(let x=0;x<talentos;x++){
if(misiones[x][4]!==undefined){
console.log(`Las Notas para el talento ${datos[x][1]}:
Mision 1: ${misiones[x][0]}
Mision 2: ${misiones[x][1]}
Mision 3: ${misiones[x][2]}
Prueba de Nivel Final: ${misiones[x][3]}
Promedio Total Notas: ${misiones[x][4]}`);
}else{
alert("¡¡ERROR!! Faltan Datos");
}
}
break;
case 11:
for(let k=0;k<talentos;k++){
for(let i=0;i<5;i++){
if((datos[k][0]!==undefined && datos[k][1]!==undefined)&&(misiones[k][i]!==undefined)){
}else{
alert("¡¡ERROR!! Faltan Datos");
}
}
}
console.log(`Datos de los Talentos`);
console.table(datos);
console.log(`Notas Misiones y Promedio`);
console.table(misiones);
break;
case 12:
console.log(`Ejericio Desarrollado por el Talento Samuel Alvarez G6 Tarde - Coex`);
break;
case 13:
alert("CERRANDO PROGRAMA");
break;
default:
alert("Opcion Inexistente");
break;
}
}while(opcion!==13);

