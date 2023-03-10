






let vNotaExamen01 = parseFloat(prompt("Ingrese la nota del EXAMEN 01"));
if (isNaN(vNotaExamen01) || (vNotaExamen01 < 0 || vNotaExamen01 > 5.1)) {

    alert("Error \n Ingrese un dato valido y vuelva a ejecutar");


} else {
    let vNotaExamen02 = parseFloat(prompt("Ingrese la nota del EXAMEN 02"));
    if (isNaN(vNotaExamen02) || (vNotaExamen02 < 0 || vNotaExamen02 > 5.1)) {

        alert("Error \n Ingrese un dato valido y vuelva a ejecutar");


    } else {
        let vNotaExamen03 = parseFloat(prompt("Ingrese la nota del EXAMEN 03"));
        if (isNaN(vNotaExamen03) || (vNotaExamen03 < 0 || vNotaExamen03 > 5.1)) {

            alert("Error \n Ingrese un dato valido y vuelva a ejecutar");


        } else {
            let vNotaTrabajos01 = parseFloat(prompt("Ingrese la nota del TRABAJO 01"));
            if (isNaN(vNotaTrabajos01) || (vNotaTrabajos01 < 0 || vNotaTrabajos01 > 5.1)) {

                alert("Error \n Ingrese un dato valido y vuelva a ejecutar");


            } else {
                let vNotaTrabajos02 = parseFloat(prompt("Ingrese la nota del TRABAJO 02"));
                if (isNaN(vNotaTrabajos02) || (vNotaTrabajos02 < 0 || vNotaTrabajos02 > 5.1)) {

                    alert("Error \n Ingrese un dato valido y vuelva a ejecutar");


                } else {
                    let vNotaExamenFinal = parseFloat(prompt("Ingrese la nota de su EXAMEN FINAL"));
                    if (isNaN(vNotaExamenFinal) || (vNotaExamenFinal < 0 || vNotaExamenFinal > 5.1)) {

                        alert("Error \n Ingrese un dato valido y vuelva a ejecutar");


                    } else {
                        let vNotaAutoevaluacion = parseFloat(prompt("Ingrese la nota de su AUTOEVALUACIÓN"));
                        if (isNaN(vNotaAutoevaluacion) || (vNotaAutoevaluacion < 0 || vNotaAutoevaluacion > 5.1)) {

                            alert("Error \n Ingrese un dato valido y vuelva a ejecutar");

                        } else 
                                var vSumaNotaExamen = (vNotaExamen01 + vNotaExamen02 + vNotaExamen03) / 3;
                                var vPromedioExamen = vSumaNotaExamen * 0.55;   //-----55%//

                                var vSumaNotaTrabajos = (vNotaTrabajos01 + vNotaTrabajos02) / 2;
                                var vPromedioTrabajos = vSumaNotaTrabajos * 0.15;  //-----15%//

                                var vPromedioExamenFinal = vNotaExamenFinal * 0.20;

                                var vSumaNotaCoAutoEvaluacion = (vNotaAutoevaluacion + vNotaCoEvaluacion) / 2;
                                var vPromedioCoAutoEvaluacion = vSumaNotaCoAutoEvaluacion * 0.10; //-----10%//

                                var vNotaDefinitiva = (vPromedioExamen + vPromedioTrabajos + vPromedioExamenFinal + vPromedioCoAutoEvaluacion);{

                                var vNotaCoEvaluacion = parseFloat(prompt("Ingrese la nota de la COEVALUACIÓN"));

                            if (isNaN(vNotaCoEvaluacion) || (vNotaCoEvaluacion < 0 || vNotaCoEvaluacion > 5.1)) {

                                alert("Error \n Ingrese un dato valido y vuelva a ejecutar");

                                

                            } else if (vNotaDefinitiva < 2 || vNotaDefinitiva < 0) {

                                alert("El estudiante \n HA REPROBADO \n \n Su nivel es: Muy bajo \n \n Su nota final es: " + vNotaDefinitiva);

                            } else if (vNotaDefinitiva < 3 || vNotaDefinitiva <= 2) {

                                alert("El estudiante \n HA REPROBADO \n \n Su nivel es: Bajo \n \n Su nota final es: " + vNotaDefinitiva);

                            } else if (vNotaDefinitiva < 4 || vNotaDefinitiva <= 3) {

                                alert("El estudiante \n HA APROBADO \n \n Su nivel es: Básico \n \n Su nota final es: " + vNotaDefinitiva);

                            } else if (vNotaDefinitiva <= 4.6 || vNotaDefinitiva <= 4) {

                                alert("El estudiante \n HA APROBADO \n \n Su nivel es: Alto \n \n Su nota final es: " + vNotaDefinitiva);

                            } else if (vNotaDefinitiva <= 5 || vNotaDefinitiva <= 4.7) {


                                alert("El estudiante \n HA APROBADO \n \n Su nivel es: Superior \n \n Su nota final es: " + vNotaDefinitiva);

                            }
                        }

                        }

                    }
                }

            }



        }




        }








