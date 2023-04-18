//formas de declarar una funcion

/**
 *FUNCIONES DECLARADAS
 function validador()-> lugar donde le pasamos parametros, o sea, valores.
 El validador, es el nombre de la función.
 Function es la palabra clave. 

 *FUNCIONES FLECHA 
 let validador=()=>"Algo"
 porque hace uso de la notacion "=>"

 *FUNCIONES ANONIMAS
 let validador= Function(){
    ~~~~~~
 }

 */

 function validador (dato){
    if(isNaN(dato)){
        return("Dato inválido");
    }else{
        return (dato);
    }
 }

 console.log(validador("5"));

 