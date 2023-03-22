let num1 = Number(prompt("Ingrese el primer número"))
let num2 = 0

if(isNaN(num1)){
    alert("El primer número no es válido. Por favor, ingrese un número válido")
}else{
    num2 = Number(prompt("Ingrese el segundo número"))
    if(isNaN(num2)){
        alert("El segundo número no es válido. Por favor, ingrese un número válido")
    }else{
        if(num1>num2){
            alert(num2 + " , " + num1)
        }else if(num1<num2){
            alert(num1 + " , " + num2)
        }else{
            alert(num1 + " , " + num2)
        }
    }
}