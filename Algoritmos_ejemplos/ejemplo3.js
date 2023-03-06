let lado1= parseInt(prompt("ingrese el valor del lado 1"))
let lado2= parseInt(prompt("ingrese el valor del lado 2"))
let lado3= parseInt(prompt("ingrese el valor del lado 3"))

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)){
    alert("error")
}else if (lado1=lado2=lado3) {

    console.log("el triangulo es equilatero")

}else if (lado1=lado2lado3) {

    console.log( "el triangulo isoseles")

}else if (lado1=lado3!=lado2){

    console.log( "el triangulo es isoseles")

}else if (lado2=lado3!=lado1){

    console.log("el triangulo es isoseles")

}else if (lado1!=lado2!=lado3){

    console.log("el triangulo es escaleno")
    
}