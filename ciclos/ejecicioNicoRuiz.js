numero = Math.random()*100
for(i=10;i>0;i--){
    let number=Number(prompt("Adivine el numero"));
    if(number==numero){
        alert("Felicidades adivinaste el numero " + numero)
    }else{alert("vuelve a intentarlo, intentos restantes: " + i)}
}
if(i==0){
    alert("No adivininaste el numero, el numero era: " + numero)
}