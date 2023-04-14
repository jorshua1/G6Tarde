/*COEX es una entidad que tiene como misión capacitar jóvenes que desean
adquirir conocimientos y habilidades en el área de programación. Al llegar a
COEX, cada talento es registrado con un código y su nombre. Un grupo puede
estar conformado una cantidad N de talentos. Durante el transcurso del
módulo uno, se presentan y explican diferentes temáticas y cada talento
realiza una misión, que es una prueba para medir como va su proceso. Cada
misión, es puntuada con un valor entre 1 y 100. En total se realizan 3
misiones. Al finalizar el módulo, se realizará una misión final, conocida como
prueba de Nivel. Se les solicita a ustedes como talentos que han adquirido los
conceptos y habilidades de programadores para que creen un programa que
permita llevar a cabo los registros correspondientes al proceso. Se les solicita
que el programa tenga un menú que:

1. Solicite la cantidad N de talentos (solo se debe hacer una vez y no debe
permitir hacer los otros hasta no haberla realizado)
2. Registrar los datos de los talentos en una matriz 2xN (Código y Nombre)
3. Registrar nota de Misión 1
4. Registrar nota de Misión 2
5. Registrar nota de Misión 3
6. Registrar prueba de nivel final
7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene de las 4 pruebas)
11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y prueba final
12.Nombre de los talentos que desarrollaron el ejercicio
13.Salir
Se debe validar que la nota de cada talento esté entre 0 y 100, Se debe evitar
que se repitan códigos al registrar estudiantes, Se debe validar que el nombre
del talento no esté vacío */

let textoMenu = `
1. Solicite la cantidad N de talentos 
2. Registrar los datos de los talentos
3. Registrar nota de Misión 1
4. Registrar nota de Misión 2
5. Registrar nota de Misión 3
6. Registrar prueba de nivel final
7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2/Logout
9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
10.Mostrar el nombre y el promedio de cada talento
11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y prueba final
12.Nombre de los talentos que desarrollaron el ejercicio
13.Salir`;

let menu = parseInt(prompt(textoMenu));

while(isNaN(menu) || menu < 0 || menu > 13){
    let menu = parseInt(prompt(textoMenu));
}