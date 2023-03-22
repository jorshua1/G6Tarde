let TipoAnimal= prompt("Ingrese tipo de animal a revisar");
while(TipoAnimal !== "elefante" && TipoAnimal !== "jirafas" && TipoAnimal !== "chimpance" ){
    TipoAnimal= prompt("Ingrese tipo de animal a revisar correcto");
}
if(TipoAnimal == "elefante"){
    let NumEle=1;
    elefanteBebe=0;
    elefanteJoven=0;
    elefanteAdulto=0;
    for(i=20;i>0;i--){
        edadElefante = Number(prompt("Ingrese la edad del elefante" + NumEle));
            while((isNaN(edadElefante))||(edadElefante<0)||(!Number.isInteger(edadElefante))){
                edadElefante = Number(prompt("Ingrese un valor de edad valido"));
            }
            if((edadAnimal<=1)){
                elefanteBebe=elefanteBebe+1;
            }else if((edadAnimal==2)){
                elefanteJoven=elefanteJoven+1;
            }else{
                elefanteAdulto=elefanteAdulto+1;
            }
            
    }
    alert("Total elefantes bebes: " + elefanteBebe + "Total elefantes Jovenes: " + elefanteJoven + "Total elefantes Adultos: " + elefanteAdulto)
}else if(TipoAnimal == "jirafas"){
    let NumJi=1;
    jirafaBebe=0;
    jirafaJoven=0;
    jirafaAdulto=0;
    for(i=15;i>0;i--){
        edadJirafa = Number(prompt("Ingrese la edad del elefante" + NumEle));
            while((isNaN(edadJirafa))||(edadJirafa<0)||(!Number.isInteger(edadJirafa))){
                edadJirafa = Number(prompt("Ingrese un valor de edad valido"));
            }
            if((edadJirafa<=1)){
                jirafaBebe=JirafaBebe+1;
            }else if((edadJirafa==2)){
                jirafaJoven=jirafaJoven+1;
            }else{
                jirafaAdulto=jirafaAdulto+1;
            }
            
    }
    alert("Total Jirafas bebes: " + jirafaBebe + "Total jirafas Jovenes: " + jirafaJoven + "Total Jirafas Adultos: " + jirafaAdulto)
}else if(TipoAnimal == "chimpance"){
    let NumChi=1;
    ChimBebe=0;
    ChimJoven=0;
    ChimAdulto=0;
    for(i=40;i>0;i--){
        edadChim = Number(prompt("Ingrese la edad del elefante" + NumChi));
            while((isNaN(edadChim))||(edadChim<0)||(!Number.isInteger(edadChim))){
                edadChim = Number(prompt("Ingrese un valor de edad valido"));
            }
            if((edadChim<=1)){
                ChimBebe=ChimBebe+1;
            }else if((edadChim==2)){
                ChimJoven=ChimJoven+1;
            }else{
                ChimAdulto=ChimAdulto+1;
            }
            
    }
    alert("Total Chimpances bebes: " + ChimBebe + "Total Chimpances Jovenes: " + ChimJoven + "Total chimpances Adultos: " + ChimAdulto)
}