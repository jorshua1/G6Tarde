function lista(numero){
    if(isNaN(numero)){
        return("ERROR.");
    }
    numero>=0?"Se van a generar numeros positivos":"Se van a generar numeros negativos";
    if(numero>0){
        for(let i=1; i<=numero;i++){
            arreglo[i]=i;
        }
    }else{
        for(let i=1; i>=numero;i--){
            arreglo[i]=i;
        }
    }
    return(arreglo);
}
let arreglo=new Array();
let valor=Number(prompt("Ingrese un numero"));
console.log(lista(valor));