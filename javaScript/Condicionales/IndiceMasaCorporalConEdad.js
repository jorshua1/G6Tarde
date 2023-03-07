/*realice un algoritmo con el que segun su edad y su indice de masa 
corporal indique si su peso es normal, tiene sobre peso, tiene obesidad  */

let peso = Number(prompt("¿Cuál es su peso en kg?"));
let estatura = 0;
let edad = 0;
let imc = 0;

if((isNaN(peso)) || (peso<=0)){
    alert("Por favor, indique un valor de peso válido");
}else{
    estatura = Number(prompt("¿Cuál es su estatura en metros?"));
    if((isNaN(estatura)) || (estatura<=0)){
        alert("Por favor, indique un valor de estatura válido");
    }else{
        imc = peso/(estatura**2);
        edad = Number(prompt("¿Cuál es su edad?"));
        if((isNaN(edad)) || (edad<=0)){
            alert("Por favor, indique un valor de edad válido");
        }else{
            if((edad<=18) && (imc>=10) && (imc<=18)){
                alert("El usuario tiene un peso normal");
            }else if((edad<=18) && (imc<10)){
                alert("El usuario tiene bajo peso");
            }else if((edad<=18) && (imc>18)){
                alert("El usuario tiene sobre peso");
            }else if(((edad>=19) && (edad<=24)) && (imc>=19) && (imc<=24)){
                alert("El usuario tiene un peso normal");
            }else if(((edad>=19) && (edad<=24)) && (imc<19)){
                alert("El usuario tiene bajo peso");
            }else if(((edad>=19) && (edad<=24)) && (imc>24)){
                alert("El usuario tiene sobre peso");
            }else if(((edad>=25) && (edad<=34)) && (imc>=20) && (imc<=25)){
                alert("El usuario tiene un peso normal");
            }else if(((edad>=25) && (edad<=34)) && (imc<20)){
                alert("El usuario tiene bajo peso");
            }else if(((edad>=25) && (edad<=34)) && (imc>25)){
                alert("El usuario tiene sobre peso");
            }else if(((edad>=35) && (edad<=44)) && (imc>=21) && (imc<=26)){
                alert("El usuario tiene un peso normal");
            }else if(((edad>=35) && (edad<=44)) && (imc<21)){
                alert("El usuario tiene bajo peso")
            }else if(((edad>=35) && (edad<=44)) && (imc>26)){
                alert("El usuario tiene sobre peso")
            }else if(((edad>=45) && (edad<=54)) && (imc>=22) && (imc<=27)){
                alert("El usuario tiene un peso normal");
            }else if(((edad>=45) && (edad<=54)) && (imc<22)){
                alert("El usuario tiene bajo peso");
            }else if(((edad>=45) && (edad<=54)) && (imc>27)){
                alert("El usuario tiene sobre peso");
            }else if(((edad>=55) && (edad<=64)) && (imc>=23) && (imc<=28)){
                alert("El usuario tiene un peso normal");
            }else if(((edad>=55) && (edad<=64)) && (imc<23)){
                alert("El usuario tiene bajo peso");
            }else if(((edad>=55) && (edad<=64)) && (imc>28)){
                alert("El usuario tiene sobre peso");
            }else if((edad>=65) && (imc>=24) && (imc<=29)){
                alert("El usuario tiene un peso normal");
            }else if((edad>=65) && (imc<24)){
                alert("El usuario tiene bajo peso");
            }else if((edad>=65) && (imc>29)){
                alert("El usuario tiene sobre peso");
            }
        }
    }
}