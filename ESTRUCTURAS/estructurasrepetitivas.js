//WHILE

//FOR
let number = parseInt(prompt("ingrese un numero"));
while(isNaN(number)){
    number = parseInt(prompt("ingrese un numero"))
}

for(multiplicador= 0; multiplicador<=10 ; multiplicador++){
    /*let resultado = multiplicador*number*/
    console.log(number + "x" + multiplicador + "=" + multiplicador*number)
}