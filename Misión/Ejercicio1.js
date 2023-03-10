let exam1 = parseFloat(prompt("Ingrese la nota de su primer examen"));
if(isNaN(exam1)|| exam1<0 || exam1>5){
    console.log("Error")
}
    else{
        let exam2 = parseFloat(prompt("Ingrese la nota de su segundo examen"));
        if(isNaN(exam2)|| exam2<0 || exam2>5){
            console.log("Error")
            }
            else{
                let exam3 = parseFloat(prompt("Ingrese la nota de su tercer examen"));
                if(isNaN(exam3)|| exam3<0 || exam3>5){
                    console.log("Error")
                    }
                    else{
                        let trab1 = parseFloat(prompt("Ingrese la nota de su primer trabajo"));
                        if(isNaN(trab1)|| trab1<0 || trab1>5){
                            console.log("Error")
                            }
                            else{
                                let trab2 = parseFloat(prompt("Ingrese la nota de su segundo trabajo"));
                                if(isNaN(trab2)|| trab2<0 || trab2>5){
                                    console.log("Error")
                                    }
                                    else{
                                        let examenfinal = parseFloat(prompt("Ingrese la nota de su examen final"));
                                        if(isNaN(examenfinal)|| examenfinal<0 || examenfinal>5){
                                            console.log("Error")
                                            }
                                            else{
                                                let autoeva = parseFloat(prompt("Ingrese la nota de su autoevaluación"));
                                                if(isNaN(autoeva)|| autoeva<0 || autoeva>5){
                                                    console.log("Error")
                                                    }
                                                    else{
                                                        let coeeva = parseFloat(prompt("Ingrese la nota de la co-evaluación"));
                                                        if(isNaN(coeeva)|| coeeva<0 || coeeva>5){
                                                            console.log("Error")
                                                            }
                                                            else{ 
                                                                let promexamenes = ((exam1 + exam2 + exam3)/3)*0.55;
                                                                let protrabajos = ((trab1 + trab2)/2)*0.15;
                                                                let proexamen = (examenfinal)*0.2;
                                                                let proauto = ((autoeva + coeeva)/2)*0.1;
                                                                let total = (promexamenes + protrabajos + proexamen + proauto);
                                                                
                                                                if(total>=0 && total<2){
                                                                    console.log("Su nivel es MUY BAJO, NO ha aprobado el curso con una nota definitiva ", total)
                                                                }
                                                                else if(total>=2 && total<3){
                                                                    console.log("Su nivel es BAJO, NO ha aprobado el curso con una nota definitiva ", total)
                                                                }
                                                                else if(total>=3 && total<4){
                                                                    console.log("Su nivel es BÁSICO, Ha aprobado el curso con una nota definitiva ", total)
                                                                }
                                                                else if(total>=4 && total<4.7){
                                                                    console.log("Su nuvel es ALTO, Ha aprobado el curso con una nota definitiva ", total)
                                                                }
                                                                else{
                                                                    console.log("Su nivel es SUPERIOR, Ha aprobado el curso con una nota definitiva ", total)
                                                                }
                                                            }
                                                    }
                                            }
                                    }
                                }
                        }
                }
        }
