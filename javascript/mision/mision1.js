//mision uso de condicionales
let nota1E=Number(prompt("ingrese la primera nota del examen"));
if (isNaN(nota1E)|| nota1E<0 || nota1E>5){
    console.log("error, dato invalido")
}
else{
    let nota2E=Number(prompt("ingrese la segunda nota del examen"));
    if (isNaN(nota2E)|| nota2E<0 || nota2E>5){
        console.log("error, dato invalido")
    }
    else{
        let nota3E=Number(prompt("ingrese la tercera nota del examen"));
        if(isNaN(nota3E)|| nota3E<0 || nota3E>5){
            console.log("error, dato invalido");
        }
        else{
            let nota1T=Number(prompt("ingrese la nota del primer trabajo"));
            if (isNaN(nota1T)||nota1T<0||nota1T>5){
                console.log("error, dato invalido")
            }
            else{
                let nota2T=Number(prompt("ingrese la segunda nota del trabajo"));
                if(isNaN(nota2T)||nota2T<0||nota2T>5){
                    console.log("error, dato invalido")
                }
                else{
                    let examenfinal=Number(prompt("ingres la nota del examen final"))
                    if(isNaN(examenfinal)||examenfinal<0||examenfinal>5){
                        console.log("error, dato invalido")
                    }
                    else{
                        let autoevaluacion=Number(prompt("ingrese la nota de la autoevaluacion"))
                        if(isNaN(autoevaluacion)||autoevaluacion<0||autoevaluacion>5){
                            console.log("error, dato invalido")
                        }
                        else{
                            let coevaluacion=Number(prompt("ingrese la nota de la coevaluacion"))
                        if(isNaN(coevaluacion)||coevaluacion<0||coevaluacion>5){
                            console.log("error, dato invalido")
                        }
                        else{
                            let promedioE=((nota1E+nota2E+nota3E)/3)*0.55;
                            let promedioT=((nota1T+nota2T)/2)*0.15;
                            let examenfinalp=(examenfinal*0.2);
                            let promedioautoeycoe=((autoevaluacion+coevaluacion)/2)*0.1;
                            let notadefinitiva=(promedioE+promedioT+examenfinalp+promedioautoeycoe);
                            console.log(notadefinitiva)
                            if(notadefinitiva>=0 && notadefinitiva<=1.9){
                                console.log("reprobo con un nivel muy bajo")
                            }
                            else if(notadefinitiva>=2 && notadefinitiva<=2.9){
                                console.log("reprobo con un nivel bajo")
                            }
                            else if(notadefinitiva>=3 && notadefinitiva<=3.9){
                                console.log("aprobo con un nivel basico")
                        }
                        else if(notadefinitiva>=4 && notadefinitiva<=4.6){
                            console.log("aprobo con un nivel alto")
                        }
                        else if(notadefinitiva>=4.7){
                            console.log("aprobo con un nivel superior")
                        }

                        }
                    }
                }
            }
        }
    }
}
}
