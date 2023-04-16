let menu;
let talentos=0;
let codigo=0;
let nombre;
let matriz=[];
let contadorDeTalentos=0;
let notasMatriz=[];
let notaMisionUno=0;
let notaMisionDos=0;
let notaMisionTres=0;
let pruebaDeNivelFinal=0;
let mayor=0;
let promedio;
let promedioDeTodasLasNotas;
let nombreYpromedio=[];
let contador;
do {
    menu=parseInt(prompt("Ingrese una de las siguientes opciones\n1-Ingresar cantidad de talentos     8-Mejor nota en la mision 2\n2-Registrar datos                            9-Mejor nota en la mision 3 \n3-Registrar nota mision 1             10-Promedio de cada talento\n4-Registrar nota mision 2             11-Notas completas de los talentos\n5-Registrar nota mision 3             12-Sobre el autor\n6-Registrar nota prueba final        13-Salir \n7-Mejor nota en la mision 1"));
    while (isNaN(menu)||menu<1||menu>13){
        menu=parseInt(prompt("Ingrese una opcion VALIDA de las siguientes opciones\n1-Ingresar cantidad de talentos     8-Mejor nota en la mision 2\n2-Registrar datos                            9-Mejor nota en la mision 3 \n3-Registrar nota mision 1             10-Promedio de cada talento\n4-Registrar nota mision 2             11-Notas completas de los talentos\n5-Registrar nota mision 3             12-Sobre el autor\n6-Registrar nota prueba final        13-Salir \n7-Mejor nota en la mision 1"));
    }
    switch (menu){
        case 1:
            if (talentos<1&&codigo<1){
                alert("La cantidad de talentos NO se podra modificar luego de haber registrado todos los talentos");
                talentos=parseInt(prompt("Ingrese la cantidad de talentos "));
                while (isNaN(talentos)||talentos<1){
                    talentos=parseInt(prompt("Ingrese una cantidad valida de talentos "));
                }
                for (let y=0;y<talentos;y++){
                    matriz[y]=[]
                    for (let x=0;x<=1;x++){
                        matriz[y][x];
                    }
                }
            }else{
                alert("La cantidad de talentos definida es de "+talentos);
            }
            break
        case 2:
            if (talentos>0&&codigo<1){
                for (let i=0;i<talentos;i++){
                    codigo=parseInt(prompt("Ingrese el codigo del talento "+(++contadorDeTalentos)))
                    while (isNaN(codigo)||codigo<1){
                        codigo=parseInt(prompt("Ingrese un codigo valido para el talento "+contadorDeTalentos));
                        for (let i = 0; i < matriz.length; i++) {
                            while (matriz[i][0] === codigo||isNaN(codigo)||codigo<1) {
                                codigo = parseInt(prompt("Ingrese un codigo valido para el talento "+contadorDeTalentos))
                        }
                    }
                    }
                    for (let i = 0; i < matriz.length; i++) {
                        while (matriz[i][0] === codigo||isNaN(codigo)||codigo<1) {
                            codigo = parseInt(prompt("Ingrese un codigo valido para el talento "+contadorDeTalentos))
                        }
                    }
                    matriz[i][0]=codigo
                    nombre=prompt("Ingrese el nombre del talento "+contadorDeTalentos);
                    while (!isNaN(nombre)||nombre.length>8||nombre===" "){
                        nombre=prompt("Ingrese un nombre valido para el talento "+contadorDeTalentos)
                    }
                    matriz[i][1]=nombre
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 3:
            if (notaMisionUno<1&&codigo>0){
                for (let y=0;y<talentos;y++){
                    notasMatriz[y]=[];
                    for (let x=0;x<=4;x++){
                        notasMatriz[y][x];
                    }
                }
                for (let i=0;i<talentos;i++){
                    notaMisionUno=parseFloat(prompt("Ingrese la nota de la mision 1 del talento "+matriz[i][1]));
                    while (isNaN(notaMisionUno)||notaMisionUno<1||notaMisionUno>100){
                        notaMisionUno=parseFloat(prompt("Ingrese una nota valida de la mision 1 del talento "+matriz[i][1]));
                    }
                    notasMatriz[i][0]=notaMisionUno
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 4:
            if (notaMisionDos<1&&codigo>0&&notaMisionUno>0){
                for (let a=0;a<talentos;a++){
                    notaMisionDos=parseFloat(prompt("Ingrese la nota de la mision 2 del talento "+matriz[a][1]));
                    while (isNaN(notaMisionDos)||notaMisionDos<1||notaMisionDos>100){
                        notaMisionDos=parseFloat(prompt("Ingrese una nota valida de la mision 2 del talento "+matriz[a][1]))
                    }
                    notasMatriz[a][1]=notaMisionDos
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 5:
            if (notaMisionTres<1&&codigo>0&&notaMisionDos>0&&notaMisionUno>0){
                for (let y=0;y<talentos;y++){
                    notaMisionTres=parseFloat(prompt("Ingrese la nota de la mision 3 del talento "+matriz[y][1]));
                    while (isNaN(notaMisionTres)||notaMisionTres<1||notaMisionTres>100){
                        notaMisionTres=parseFloat(prompt("Ingrese una nota valida de la mision 3 del talento "+matriz[y][1]))
                    }
                    notasMatriz[y][2]=notaMisionTres
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 6:
            if (pruebaDeNivelFinal<1&&codigo>0&&notaMisionTres>0&&notaMisionDos>0&&notaMisionUno>0){
                for (let x=0;x<talentos;x++){
                    promedio=0;
                    pruebaDeNivelFinal=parseFloat(prompt("Ingrese la prueba de nivel final del talento "+matriz[x][1]));
                    while (isNaN(pruebaDeNivelFinal)||pruebaDeNivelFinal<1||pruebaDeNivelFinal>100){
                        pruebaDeNivelFinal=parseFloat(prompt("Ingrese una prueba de nivel valida para el talento "+matriz[x][1]));
                    }
                    notasMatriz[x][3]=pruebaDeNivelFinal
                    for (let y=0;y<4;y++){
                        promedio+=notasMatriz[x][y]
                        promedioDeTodasLasNotas=promedio/4;
                        notasMatriz[x][4]=promedioDeTodasLasNotas
                    }
                }
                for (let x=0;x<talentos;x++){
                    let a=1
                    for (let y=0;y<4;y++){
                        matriz[x][(++a)]=notasMatriz[x][y]
                    }
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 7:
            if (notaMisionUno>0){
                if (talentos>1){
                    contador=0;
                    mayor=0
                    for (let x=0;x<talentos;x++){
                        if (mayor<notasMatriz[x][0]){
                            mayor=notasMatriz[x][0];
                            contador++
                        }
                    }
                    alert('El talento con la nota mayor en la mision 1 fue " '+matriz[contador-1][1]+' " con la nota '+mayor);
                }else{
                    alert('El talento con la nota mayor en la mision 1 fue " '+matriz[0][1]+' " con la nota '+notasMatriz[0][0]);
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 8:
            if (notaMisionDos>0){
                if (talentos>1){
                    contador=0;
                    mayor=0
                    for (let x=0;x<talentos;x++){
                        if (mayor<notasMatriz[x][1]){
                            mayor=notasMatriz[x][1];
                            contador++
                        }
                    }
                    alert('El talento con la nota mayor en la mision 2 fue " '+matriz[contador-1][1]+' " con la nota '+mayor);
                }else{
                    alert('El talento con la nota mayor en la mision 2 fue " '+matriz[0][1]+' " con la nota '+notasMatriz[0][1]);
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 9:
            if (notaMisionTres>0){
                if (talentos>1){
                    contador=0;
                    mayor=0
                    for (let x=0;x<talentos;x++){
                        if (mayor<notasMatriz[x][2]){
                            mayor=notasMatriz[x][2];
                            contador++
                        }
                    }
                    alert('El talento con la nota mayor en la mision 3 fue " '+matriz[contador-1][1]+' " con la nota '+mayor);
                }else{
                    alert('El talento con la nota mayor en la mision 3 fue " '+matriz[0][1]+' " con la nota '+notasMatriz[0][2]);
                }
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 10:
            if (pruebaDeNivelFinal>0){
                alert("A continuacion se le mostrara el nombre y el promedio de los talentos registrados");
                for (let a=0;a<talentos;a++){
                    nombreYpromedio[a]=[]
                    for (let b=0;b<=1;b++){
                        nombreYpromedio[a]["Nombre"]=matriz[a][1];
                        nombreYpromedio[a]["Promedio"]=notasMatriz[a][4]
                    }
                }
                console.table(nombreYpromedio)
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 11:
            if (pruebaDeNivelFinal>0){
                alert("A continuacion se le mostrara las notas completas de los talentos ");
                console.table(matriz);
                alert("---------Orden de los datos mostrados------------\n0-Codigo\n1-Nombre\n2-Nota mision 1\n3-Nota mision 2\n4-Nota mision 3\n5-Prueba final");
            }else{
                alert("No es posible realizar esta accion");
            }
            break
        case 12:
            alert("Este ejercicio fue realizado por Luis Andrés Alvarez Silva");
            break
        case 13:
            alert("Hasta luego, vuelva pronto :)");
    }
}while (menu!==13);
