let contar, max, msg='';
max = parseInt(prompt("Teclear un número entero"));
for(contar = max; contar > 0;  contar--){
msg += contar + ", ";
}
msg += contar;   //Evita la coma al final
alert(msg);