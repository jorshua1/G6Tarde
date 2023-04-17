function validador(){
    let num=Number(prompt("Ingrese un numero"))
    while(isNaN(num)){
        alert("ingrese un numero valido")
        num=Number(prompt("Ingrese un numero"))
    }
    return num<0 ? "Es negativo"  : num===0 ? "Es cero" : num>0 ? "Es positivo" : ""
     
}
validador();