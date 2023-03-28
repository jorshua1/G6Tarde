let NumeroFamiliares=0;
let opcion=0;
let opcionUno=0;
let nombre="";
let parentesco="";
let edad = 0;
let peso =0;
let estatura =0;
let ICM=0;
let ICMfamiliar=0;
let NivelPeso="";
let promICMfamiliar=0;
let NivelPesoFamiliar=0;
while(opcion!==4){
 opcion = Number(prompt(`Selecciona una opcion del menu:
1.Ingresar numero de familiares 
2.Ingresar datos de familiares
3.Calcular ICM
4.Salir
`))
while(isNaN(opcion) || opcion <= 0 || opcion > 4 || (!Number.isInteger(opcion))) {
  alert("Ingrese un valor valido")
  opcion = Number(prompt(`Selecciona una opcion del menu:
  1.Ingresar numero de familiares
  2.Ingresar datos de familiares
  3.Calcular ICM
  4.Salir
  `))
}
switch(opcion) {
    case 1:
        while (opcionUno===0){
        NumeroFamiliares=Number(prompt(`Ingrese cantidad de familiares mayores de 20 años`))
        while(isNaN(NumeroFamiliares) || NumeroFamiliares <= 0 || !Number.isInteger(NumeroFamiliares)){
            alert("Ingrese un valor valido")
            NumeroFamiliares=Number(prompt(`Ingrese cantidad defamiliares mayores de 20 años`))
        }
        opcionUno=1;
    }
    break;
    case 2:
        if(NumeroFamiliares!==0){
        for(var i=1; i<=NumeroFamiliares; i++){
        nombre=prompt("Ingrese nombre del familiar " + i)
        while(!isNaN(nombre)){
          alert("Ingrese un dato valido")
          nombre=prompt("Ingrese nombre del familiar " +i)
        }
        parentesco=prompt("Ingrese parentezco de "+nombre)
        while(!isNaN(parentesco)){
        alert("Ingrese un dato valido")
        parentesco=prompt("Ingrese parentezco de " +nombre)
        }
        edad=Number(prompt("Ingrese edad de "+nombre))
        while(isNaN(edad) || edad<20){
          alert("Ingrese un dato valido")
          edad=Number(prompt("Ingrese edad de "+nombre))
        }
        peso=parseFloat(prompt("Ingrese peso de "+nombre + " (KG)"))
        while(isNaN(peso) || peso<0){
          alert("Ingrese un dato valido")
          peso=Number(prompt("Ingrese peso de "+nombre + " (KG)"))
        }
  
        estatura=parseFloat(prompt("Ingrese estatura de "+nombre+ " (Metros)"))
        while(isNaN(estatura) || estatura<0){
          alert("Ingrese un dato valido")
          peso=Number(prompt("Ingrese estatura de "+nombre+ " (Metros)"))
        }
        ICM=peso/(estatura**2)
        ICMfamiliar=ICMfamiliar+ICM 
        if(ICM<18.5){
          NivelPeso="Bajo peso"
        }else if(ICM>=18.5 && ICM<24.9){
          NivelPeso="Normal"
        }else if(ICM>=25.0 && ICM<28.9){
          NivelPeso="Sobrepeso"
        }else if(ICM>=29.0 && ICM<34.9){
          NivelPeso="Obeso I"
        }else if(ICM>35.0){
          NivelPeso="Obeso II"
        }
        alert(`Nombre: ${nombre}
        Parentezco: ${parentesco}
        Edad: ${edad}
        Peso: ${peso}
        Estatura: ${estatura}
        ICM: ${ICM}
        Nivel de peso: ${NivelPeso}
        `)  
        }
      }else{
        alert("Primero ingrese numero de familiares (opcion 1)")
      }
        break;
    case 3:
      if(NumeroFamiliares!==0 || ICMfamiliar!==0){
        promICMfamiliar = ICMfamiliar/NumeroFamiliares
        if(promICMfamiliar<18.5){
          NivelPesoFamiliar="Bajo peso"
        }else if(promICMfamiliar>=18.5 && promICMfamiliar<24.9){
          NivelPesoFamiliar="Normal"
        }else if(promICMfamiliar>=25.0 && promICMfamiliar<28.9){
          NivelPesoFamiliar="Sobrepeso"
        }else if(promICMfamiliar>=29.0 && promICMfamiliar<34.9){
          NivelPesoFamiliar="Obeso I"
        }else if(promICMfamiliar>35.0){
          NivelPesoFamiliar="Obeso II"
        }
        alert(`
        La familia tiene un promedio de ICM de ${promICMfamiliar}
        por lo que el nivel de peso de la familia es: ${NivelPesoFamiliar}`)
      }else{
        alert("Primero ingrese datos de opcion 1 y opcion 2")
      }
        break;
      default:
        alert("Ingrese dato valido")
        break;
}
}