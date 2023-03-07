let edad = Number(prompt("Por favor ingrese su edad"));

if((edad>=0) && (edad<=5)){
    alert("El usuario pertenece a la categoría bb");
}else if((edad>=6) && (edad<=10)){
    alert("El usuario pertenece a la categoría adolex ente");
}else if((edad>=11) && (edad<=18)){
    alert("El usuario pertenece a la categoría casi maduro");
}else if((edad>=19) && (edad<=25)){
    alert("El usuario pertenece a la categoría maduro");
}else if((edad>=26) && (edad<=50)){
    alert("El usuario pertenece a la categoría casi pensionado");
}else if((edad>=51) && (edad<=70)){
    alert("El usuario pertenece a la categoría penxionadox");
}else if(edad>=71){
    alert("El usuario pertenece a la categoría amigo de matusalen");
}else{
    alert("Por favor, ingrese un valor válido");
}
