let animal = Number(prompt("¿Qué especie animal desea el zoológico que el zoólogo estudie? Seleccione una de las siguientes opciones. \n1 para estudiar a los elefantes.\n2 para estudiar a las jirafas.\n3 para estudiar a los chimpancés"));
let cantidad = 0;
let edadAnimal = 0;
let animalBebe = 0;
let animalJoven = 0;
let animalAdulto = 0;
let contadorAnimales = 0;


while((animal != 1)&&(animal !=2)&&(animal !=3)){
    animal = Number(prompt("Por favor, seleccione 1, 2 o 3 de acuerdo a las opciones. \n1 para estudiar a los elefantes.\n2 para estudiar a las jirafas.\n3 para estudiar a los chimpancés"));
}

switch(animal){
        case 1:
        cantidad = 20;
        for(cantidad;cantidad>0;cantidad--){
            contadorAnimales++
            edadAnimal = Number(prompt("Ingrese la edad muestra (en años) del elefante N°" + contadorAnimales + "."));
            while((isNaN(edadAnimal))||(edadAnimal<0)||(!Number.isInteger(edadAnimal))){
                edadAnimal = Number(prompt("Ingrese un valor de edad (en años) válido para la muestra N°" + contadorAnimales + "."));
            }
            if((edadAnimal==0)||(edadAnimal==1)){
                animalBebe++
            }else if((edadAnimal==2)){
                animalJoven++
            }else{
                animalAdulto++
            }
        }
        alert("Hay " + animalBebe + " elefante(s) bebé(s) que equivalen al " + parseInt(((animalBebe/20)*100)) + "% del total. \nHay " + animalJoven + " elefante(s) en la etapa joven que equivalen al " + parseInt(((animalJoven/20)*100)) + "% del total. \nY hay " + animalAdulto + " elefante(s) adulto(s) que equivalen al " + parseInt(((animalAdulto/20)*100)) + "% del total.");
        break;
    
    case 2:
        cantidad = 15;
        for(cantidad;cantidad>0;cantidad--){
            contadorAnimales++
            edadAnimal = Number(prompt("Ingrese la edad muestra (en años) de la jirafa N°" + contadorAnimales + "."));
            while((isNaN(edadAnimal))||(edadAnimal<0)||(!Number.isInteger(edadAnimal))){
                edadAnimal = Number(prompt("Ingrese un valor de edad (en años) válido para la muestra N°" + contadorAnimales + "."));
            }
            if((edadAnimal==0)||(edadAnimal==1)){
                animalBebe++
            }else if((edadAnimal==2)){
                animalJoven++
            }else{
                animalAdulto++
            }
        }
        alert("Hay " + animalBebe + " jirafa(s) bebé(s) que equivalen al " + parseInt(((animalBebe/15)*100)) + "% del total. \nHay " + animalJoven + " jirafa(s) en la etapa joven que equivalen al " + parseInt(((animalJoven/15)*100)) + "% del total. \nY hay " + animalAdulto + " jirafa(s) adulto(s) que equivalen al " + parseInt(((animalAdulto/15)*100)) + "% del total.");
        break;

    case 3:
        cantidad = 40;
        for(cantidad;cantidad>0;cantidad--){
            contadorAnimales++
            edadAnimal = Number(prompt("Ingrese la edad muestra (en años) del chimpancé N°" + contadorAnimales + "."));
            while((isNaN(edadAnimal))||(edadAnimal<0)||(!Number.isInteger(edadAnimal))){
                edadAnimal = Number(prompt("Ingrese un valor de edad (en años) válido para la muestra N°" + contadorAnimales + "."));
            }
            if((edadAnimal==0)||(edadAnimal==1)){
                animalBebe++
            }else if((edadAnimal==2)){
                animalJoven++
            }else{
                animalAdulto++
            }
        }
        alert("Hay " + animalBebe + " chimpancé(s) bebé(s) que equivalen al " + parseInt(((animalBebe/40)*100)) + "% del total. \nHay " + animalJoven + " chimpancé(s) en la etapa joven que equivalen al " + parseInt(((animalJoven/40)*100)) + "% del total. \nY hay " + animalAdulto + " chimpancé(s) adulto(s) que equivalen al " + parseInt(((animalAdulto/40)*100)) + "% del total.");
        break;
    default:
        alert("Ha ocurrido un error inesperado");
        break;
}
