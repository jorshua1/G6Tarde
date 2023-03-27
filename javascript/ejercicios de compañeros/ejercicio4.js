//determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero
let ladoa=parseInt(prompt("ingrese el lado mas largo"));
let ladob=parseInt(prompt("ingrese el valor lado"));
let ladoc=parseInt(prompt("ingrese el valor del tercer lado"));
if (ladoa**2>=((ladob)+(ladoc))){
    if(ladob==ladoc && ladoa!=lado || ladoa==ladoc && ladoa!=ladob || ladoa==ladob && ladob!=ladoc){
        console.log("su triangulo es isoceles")
    }
    else if(ladoa==ladob && ladob==ladoc){
        console.log("su triangilo es equilatero")
    }
    else{
        console.log("usted tiene un triangulo escaleno")
    }
}
else{
    console.log("no se puede hacer un triangulo con esas medidas")
}