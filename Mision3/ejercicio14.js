function fizzbuzz (numero){
    for (let i=1; i<= numero; i++){
        if(i%3===0){
            arreglo[i]="fizz";
        }else if(i%5===0){
            arreglo[i]="buzz";
        }else{
            arreglo[i]=i;
        }
    }return (arreglo);
}
let arreglo= new Array();
let dato= Number(prompt("Ingrese un numero"));
console.log(fizzbuzz(dato));
