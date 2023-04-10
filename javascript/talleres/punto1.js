// realice un algoritmo que realice la suma de una cantidad de numeros almacenados en un vector
let vector=new Array();
let numerosingresados;
let unmenudepurovisaje;
let suma=0;
    unmenudepurovisaje=Number(prompt("bienvenido a el algoritmo de suma\n una vez se empiece a sumar no podra salir hasta que termine\n en este algoritmo podra sumar 10 numeros que se ingresen por teclado\n selecione una de las siguientes opciones para continuar:\n 1. iniciar la suma\n 2. salir del programa"));
    while(unmenudepurovisaje!==1 && unmenudepurovisaje!==2){
        alert("llorelo ese dato no es valido, intente otra vez")
            unmenudepurovisaje=Number(prompt("bienvenido a el algoritmo de suma\n en este algoritmo podra sumar 10 numeros que se ingresen por teclado\n selecione una de las siguientes opciones para continuar:\n 1. iniciar la suma\n 2. salir del programa"));
    }
    if(unmenudepurovisaje==1){
for(let i=0; i<11; i++){
    if(unmenudepurovisaje==1){
        numerosingresados=Number(prompt("ingrese los datos que desea empezar a sumar"));
    }
    vector[i]=numerosingresados;
}
for(let i=0;i<11;i++){
    suma+=vector[i];
}
alert("la suma total es igual a "+suma+"\n adios");
}
else{
    alert("hasta la proxima");
}