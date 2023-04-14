let numeros = new Array();
let boleano = true;
let i=0;
while (boleano===true && numeros.length!=10){
    let valor=Number(prompt("Ingrese un numero"));
    while(isNaN(valor)){
        valor=Number(prompt("ERROR. Ingrese un numero"));
    }
    if (valor>=0){
        numeros[i]=valor;
    }else if(valor<0){
        boleano=false;
    }
    i++;
}console.log(numeros);
 