/*determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/

let t2 = parseInt(prompt("por favor digitar el valor del primer lado"));
let t1 = parseInt(prompt("por favor digitar el valor del segundo lado"));
let t3 = parseInt(prompt("por favor digitar el valor del tercer lado"));

if (!isNaN(t1) && !isNaN(t2) && !isNaN(t3)){
if (t1 == t2 && t1 == t3){

    alert("El triangulo es equilatero");

}else if (t1 == t2 || t1 == t3 || t2 == t3){

    alert("El triangulo es isoseles");
    
}else {

    alert("El triangulo es escaleno");

}
}else {

    alert("uno de los valores digitados es invalido");

}