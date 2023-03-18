let animal = Number(prompt("¿Qué especia animal desea el zoológico que el zoólogo estudie? Seleccione una de las siguientes opciones. \n1 para estudiar a los elefantes.\n2 para estudiar a las jirafas.\n3 para estudiar a los chimpancés"));
let cantidad = 0;
let animalBebe = 0;
let animalJoven = 0;
let animalAdulto = 0;


while((animal != 1)&&(animal !=2)&&(animal !=3)){
    animal = Number(prompt("Por favor, seleccione 1, 2 o 3 de acuerdo a las opciones. \n1 para estudiar a los elefantes.\n2 para estudiar a las jirafas.\n3 para estudiar a los chimpancés"));
}

switch(animal){
        case 1:
        cantidad = 20;
        while(cantidad>0){
            animalBebe = 0;
            animalBebe = Number(prompt("¿Cuántos elefantes bebé (0 a 1 años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalBebe))||(animalBebe<0)||(!Number.isInteger(animalBebe))||(animalBebe>cantidad)){
                animalBebe = Number(prompt("Indique una cantidad válida de elefantes. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalBebe;
            animalJoven = 0;
            animalJoven = Number(prompt("¿Cuántos elefantes de edad joven (mayor a 1 año y menor de 3 años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalJoven))||(animalJoven<0)||(!Number.isInteger(animalJoven))||(animalJoven>cantidad)){
                animalJoven = Number(prompt("Indique una cantidad válida de elefantes. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalJoven;
            animalAdulto = 0;
            animalAdulto = Number(prompt("¿Cuántos elefantes adultos (de 3 o más años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalAdulto))||(animalAdulto<0)||(!Number.isInteger(animalAdulto))||(animalAdulto>cantidad)){
                animalAdulto = Number(prompt("Indique una cantidad válida de elefantes. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalAdulto;
            if(cantidad>0){
                alert("No se han tomado todas las muestras necesarias de los elefantes. Se repetirá el proceso, asegúrese de que la cantidad final sea 0.");
                cantidad = 20;
            }else{
                alert("Hay " + animalBebe + " elefante(s) bebés que equivalen al " + parseInt(((animalBebe/20)*100)) + "% del total. \nHay " + animalJoven + " elefante(s) en la etapa joven que equivalen al " + parseInt(((animalJoven/20)*100)) + "% del total. \nY hay " + animalAdulto + " elefante(s) adultos que equivalen al " + parseInt(((animalAdulto/20)*100)) + "% del total.");
            }

        }
        break;
    
    case 2:
        cantidad = 15;
        while(cantidad>0){
            animalBebe = 0;
            animalBebe = Number(prompt("¿Cuántos jirafas bebé (0 a 1 años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalBebe))||(animalBebe<0)||(!Number.isInteger(animalBebe))||(animalBebe>cantidad)){
                animalBebe = Number(prompt("Indique una cantidad válida de jirafas. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalBebe;
            animalJoven = 0;
            animalJoven = Number(prompt("¿Cuántos jirafas de edad joven (mayor a 1 año y menor de 3 años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalJoven))||(animalJoven<0)||(!Number.isInteger(animalJoven))||(animalJoven>cantidad)){
                animalJoven = Number(prompt("Indique una cantidad válida de jirafas. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalJoven;
            animalAdulto = 0;
            animalAdulto = Number(prompt("¿Cuántos jirafas adultos (de 3 o más años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalAdulto))||(animalAdulto<0)||(!Number.isInteger(animalAdulto))||(animalAdulto>cantidad)){
                animalAdulto = Number(prompt("Indique una cantidad válida de jirafas. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalAdulto;
            if(cantidad>0){
                alert("No se han tomado todas las muestras necesarias de los jirafas. Se repetirá el proceso, asegúrese de que la cantidad final sea 0.");
                cantidad = 15;
            }else{
                alert("Hay " + animalBebe + " jirafa(s) bebés que equivalen al " + parseInt(((animalBebe/15)*100)) + "% del total. \nHay " + animalJoven + " jirafa(s) en la etapa joven que equivalen al " + parseInt(((animalJoven/15)*100)) + "% del total. \nY hay " + animalAdulto + " jirafa(s) adultos que equivalen al " + parseInt(((animalAdulto/15)*100)) + "% del total.");
            }
    
        }
        break;

    case 3:
        cantidad = 40;
        while(cantidad>0){
            animalBebe = 0;
            animalBebe = Number(prompt("¿Cuántos chimpancés bebé (0 a 1 años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalBebe))||(animalBebe<0)||(!Number.isInteger(animalBebe))||(animalBebe>cantidad)){
                animalBebe = Number(prompt("Indique una cantidad válida de chimpancés. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalBebe;
            animalJoven = 0;
            animalJoven = Number(prompt("¿Cuántos chimpancés de edad joven (mayor a 1 año y menor de 3 años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalJoven))||(animalJoven<0)||(!Number.isInteger(animalJoven))||(animalJoven>cantidad)){
                animalJoven = Number(prompt("Indique una cantidad válida de chimpancés. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalJoven;
            animalAdulto = 0;
            animalAdulto = Number(prompt("¿Cuántos chimpancés adultos (de 3 o más años) hay? (La cantidad no puede superar los disponibles). \nDisponibles: " + cantidad));
            while((isNaN(animalAdulto))||(animalAdulto<0)||(!Number.isInteger(animalAdulto))||(animalAdulto>cantidad)){
                animalAdulto = Number(prompt("Indique una cantidad válida de chimpancés. \nDisponibles: " + cantidad));
            }
            cantidad = cantidad - animalAdulto;
            if(cantidad>0){
                alert("No se han tomado todas las muestras necesarias de los chimpancés. Se repetirá el proceso, asegúrese de que la cantidad final sea 0.");
                cantidad = 40;
            }else{
                alert("Hay " + animalBebe + " chimpancé(s) bebés que equivalen al " + parseInt(((animalBebe/40))*100) + "% del total. \nHay " + animalJoven + " chimpancé(s) en la etapa joven que equivalen al " + parseInt(((animalJoven/40)*100)) + "% del total. \nY hay " + animalAdulto + " chimpancé(s) adultos que equivalen al " + parseInt(((animalAdulto/40)*100)) + "% del total.");
            }
    
        }
        break;
    default:
        alert("Ha ocurrido un error inesperado");
        break;
}
