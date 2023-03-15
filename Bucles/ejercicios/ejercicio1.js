// Crear script el cual determine si numero introducido por el usuario es palindromo.
    
     alert("Este programa determina si numero introducido es palindromo")
var numero = parseInt (prompt("Ingrese numero"))
var digito = 0
var invertir = 0 
var aux = numero
while(numero > 0){
    digito = numero % 10;
    invertir = (invertir * 10) + digito;
    numero = (numero - digito) / 10;
}
if(invertir == aux){
    alert("Es numero palindromo")
}else{
    alert("No es numero palindromo")
}