let arreglode100datos=[];
let menu=0;
let menu2=0;
let numerosparaelarreglo=0;
while(menu!==4){
    menu=Number(prompt("bienvenido a su algoritmo de almacenamiento de datos\nselecione una de las siguientes opciones\n 1.ingresar datos \n 2.ver datos que ingresaste ingresado\n 3.ver cauntos datos hay positivos\n 4.salir"));
    while(isNaN(Number)||menu<0|| menu>4){
        alert("dato invalido");
        menu=Number(prompt("bienvenido a su algoritmo de almacenamiento de datos\nselecione una de las siguientes opciones\n 1.ingresar datos \n 2.ver datos que ingresaste ingresado\n 3.ver cauntos datos hay positivos\n 4.salir"));
    }
    switch(menu){
        case 1:
            menu2=Number(prompt("ingrese los datos"));

            for(let i=0;i<99;i++){
                menu2=Number(prompt(""))
            }
    }
}