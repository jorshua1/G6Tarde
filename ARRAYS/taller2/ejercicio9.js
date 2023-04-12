let maxima=[];
let minima=[];
let max=0;
let min=0;
let TempProm=[];
let diasBuscados=[];
for(let i=0;i<5;i++){
    max=parseFloat(prompt("Ingrese temperatura maxima del dia "+(i+1)))
    while(isNaN(max)){
        alert("ERROR, ingrese un dato valido")
        max=parseFloat(prompt("Ingrese temperatura maxima del dia "+(i+1)))
    }
    maxima[i]=max
    min=parseFloat(prompt("Ingrese temperatura minima del dia "+(i+1)))
    while(isNaN(min) || min>max){
        alert("ERROR, ingrese un dato valido")
        min=parseFloat(prompt("Ingrese temperatura maxima del dia "+(i+1)))
    }
    minima[i]=min
}
for(let x=0;x<5;x++){
    TempProm[x]=(maxima[x]+minima[x]/2)
}
alert(`Temperatura media del dia 1: ${TempProm[0]}
Temperatura media del dia 2: ${TempProm[1]}
Temperatura media del dia 3: ${TempProm[2]}
Temperatura media del dia 4: ${TempProm[3]}
Temperatura media del dia 5: ${TempProm[4]}`)
let menor=0;
let dia=0;
for(let j=0;j<TempProm.length;j++){
    if(menor<TempProm[j]){
        menor=TempProm[j]
        dia=j+1
    }
}
alert(`Dia con menos temperatura: ${dia}
Temperatura promedio: ${menor}`)
let buscador = parseFloat(prompt("Ingrese temperatura maxima que desea buscar"))
while(isNaN(buscador)){
    alert("Error, Ingrese un dato valido")
    buscador = parseFloat(prompt("Ingrese temperatura maxima que desea buscar"))
}
for(let h=0;h<maxima.length;h++){
    if(buscador===maxima[h]){
        diasBuscados[h]=h+1
    }
}
if(diasBuscados.length===0){
    alert("No se ha encontrado dias con esa temperatura maxima")
}else{
alert(`Dias con ${buscador} de temperatura:
${diasBuscados}`)
}