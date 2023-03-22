let invitados = 100;
let presente = 0;
let sobreDinero = 0;
let regaloNovios = 0;
let bonoCasaBonita = 0;
let sinPresente = 0;
let presentesTotales = 0;
let contadorInvitados = 1;

for(invitados;invitados>0;invitados--){
    presente = Number(prompt("Eres el invitado N°" + contadorInvitados + ", ¿Qué presente traes? Selecciona la opción de acuerdo al número de su presente.\n\n1.Un sobre con dinero.\n2.Un regalo para los novios.\n3.Un bono de regalo del almacén Casa Bonita.\n4.Ninguno."));
    while((presente!==1)&&(presente!==2)&&(presente!==3)&&(presente!==4)){
        presente = Number(prompt("Por favor, selecciona una de las opciones válidas de acuerdo al número de su presente.\n\n1.Un sobre con dinero.\n2.Un regalo para los novios.\n3.Un bono de regalo del almacén Casa Bonita.\n4.Ninguno."));
    }
    if(presente===1){
        alert("Muchas gracias por el sobre con dinero, puedes pasar, bienvenido.");
        sobreDinero++;
    }else if(presente===2){
        alert("Muchas gracias por el regalo para los novios, puedes pasar, bienvenido.");
        regaloNovios++;
    }else if(presente===3){
        alert("Muchas gracias por el bono Casa Bonita, puedes pasar, bienvenido.");
        bonoCasaBonita++;
    }else{
        alert("Lo siento mucho, pero sin presente no puedes pasar.");
        sinPresente++;
    }
    contadorInvitados++;
}
presentesTotales = (sobreDinero+regaloNovios+bonoCasaBonita);

alert("En total, de los 100 invitados, " + presentesTotales + " trajeron presentes, repartidos de la siguiente manera: \nSobres con dinero: " + sobreDinero + " invitados.\nRegalo para los novios: " + regaloNovios + " invitados.\nBono de regalo del almacén Casa Bonita: " + bonoCasaBonita + " invitados.\n\n" + sinPresente + " invitados no pudieron ingresar a la fiesta porque no trajeron presente.");