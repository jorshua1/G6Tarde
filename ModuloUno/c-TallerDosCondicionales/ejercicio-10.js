/*
Escribir un programa para una empresa que tiene salas de juegos para todas las edades 
y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. 
El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. 
Si el cliente es menor de 4 años puede entrar gratis.
Si tiene entre 4 y 18 años debe pagar 5€.
Si es mayor de 18 años, 10€.
*/

let edadCliente=35;

if (edadCliente<=4){
    console.log("Entrada Gratis.");

}else if(edadCliente>4 && edadCliente<18){
    console.log("Costo de entrada 5 euros");
    
}else{
    console.log("Costo de entrada 10 euros");
}
