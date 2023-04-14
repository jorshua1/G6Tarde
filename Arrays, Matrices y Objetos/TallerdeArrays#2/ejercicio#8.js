let registro = new Array ();

let info = "";

for(let i = 0;i<registro.length+1;i++){
    registro[i] = new Array(2)
    registro[i][0] = prompt(`Ingrese el nombre del estudiante Nº${i+1}`);
    while(!isNaN(registro[i][0])){
        alert("Ingrese un nombre válido.");
        registro[i][0] = prompt(`Ingrese el nombre del estudiante Nº${i+1}`);
    }
    if(registro[i][0]!=="*"){
        registro[i][1] = Number(prompt(`Ingrese la edad de ${registro[i][0]}`));
        while((isNaN(registro[i][1]))||(!Number.isInteger(registro[i][1]))||(registro[i][1]<0)){
            alert("Ingrese una edad válida.");
            registro[i][1] = Number(prompt(`Ingrese la edad de ${registro[i][0]}`));
        }
    }else{
        registro.splice(i,(registro.length-1));
        break;
    }
}
if(registro.length>0){
    info = `Los estudiantes mayores de edad son: `;
    for(let i = 0;i<registro.length;i++){
        if(registro[i][1]>=18){
            info += `\n${registro[i][0]}.`
        }
    }
    alert(info);
    info = `Los estudiantes con mayor edad son: `
    for(let i = 1;i<registro.length;i++){
        for(let j = 0;j<registro[i].length;j++){
            if(registro[j][1]>registro[j+1][1]){
                let temp = 0;
                temp = registro[j];
                registro[j] = registro[j+1];
                registro[j+1] = temp;
            }
        }
    }
    for(let i =0;i<registro.length;i++){
        if(registro[i][1] === registro[registro.length-1][1]){
            info += `\n${registro[i][0]}`;
        }
    }
    alert(info);
}else{
    alert("No se ha ingresado ningún nombre.");
}





