/*realice un algoritmo con el que segun su edad y 
su indice de masa corporal indique si su peso es 
normal, tiene sobre peso, tiene obesidad   */

let estatura = parseFloat(prompt("Ingrese su estatura"))
let peso = parseFloat(prompt("Ingrese su peso en kilos"))
let imc = peso / (estatura * estatura);

if ((isNaN(estatura)) && (isNaN(peso))){
    alert("Ingrese valores validos")
}else if (imc < 18.5){
    alert("Su indice de masa corporal es de: " + imc + " se encuentra en peso bajo")
} else if (imc >= 18.5 && imc <= 24.9){
    alert("Su indice de masa corporal es de: " + imc + " se encuentra en peso normal")
}else if (imc >= 24.9 && imc <= 29.9){
    alert("Su indice de masa corporal es de: " + imc + " se encuentra en sobre peso")
}else {
    alert("Su indice de masa corporal se encuentra en: " + imc + " se encuentra en sobrepeso")
}
