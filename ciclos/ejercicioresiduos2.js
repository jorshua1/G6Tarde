let numeroMaximo, control;

numeroMaximo = parseInt(prompt("Ingrese un número máximo "));

while(isNaN(numeroMaximo) || numeroMaximo <= 0){
    numeroMaximo = parseInt(prompt("Por favor ingrese datos validos "));
}

for (control = 0; control < numeroMaximo; control++)
{
    if( control % 3 == 2){
        console.log(control);
    }
}