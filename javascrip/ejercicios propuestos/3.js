/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/	

let a=prompt("ingrese el lado a");
let b=prompt("ingrese el lado b");
let c=prompt("ingrese el lado c");

if (a==b && c!=b || c==a && b!=c || c==b && c!=a ){
    console.log("Es un triangulo isosceles");

}else if(a==b && b==c){
    console.log("Es un triangulo equilatero");

}else if (a!=b && b!=c && a!=c){
    console.log("Es un triangulo escaleno")
}
