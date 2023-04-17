function validador (){
    let numero=Number(prompt("Ingrese un numero"))
    while(isNaN(numero) || numero<0){
        alert("ingrese un numero valido")
        numero=Number(prompt("Ingrese un numero"))
    }
    if(numero%2===0){
        return "Es par"
    }else{
        return "Es impar"
    }
}
validador();