let caracteres = [];
let caracter="";
for(let i=0;i<5;i++){
     caracter = prompt("Ingrese un dato tipo caracter")
     while(!isNaN(caracter)){
        alert("Error  Ingrese un dato tipo caracter")
        caracter = prompt("Ingrese un dato tipo caracter")
     }
     caracteres[i]=caracter
}
let contador = 4;
let caracteresAlreves= [];
for(let x=0;x<caracteres.length;x++){
    caracteresAlreves[x]=caracteres[contador]
    contador--
}
alert(`Lista: ${caracteres}
lista invertida: ${caracteresAlreves}`)

