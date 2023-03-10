
let exam1=Number(prompt("ingrese la nota del examen 1"))

if  ((isNaN(exam1)) || exam1 < 0 ||  exam1>5 ) {
    console.log("no ingreso datos validos vuelva a intentar");
    }else{
        let exam2=Number(prompt("ingrese la nota del examen 2"))
        if((isNaN(exam2)) || exam2 < 0 || exam2>5){
            console.log("no ingreso datos validos vuelva a intentarlo");
        } else{
            let exam3=Number(prompt("ingrese la nota del examen 3"));
            if((isNaN(exam3)) || exam3 < 0 || exam2>5){
                console.log("no ingreso datos validos vuelva a intentarlo");
            }else{
                let tra1=Number(prompt("ingrese la nota del trabajo 1"))
                if ((isNaN(tra1)) || tra1 < 0 || tra1 > 5){
                    console.log("no ingreso datos validos vuelva a intentar");
                }else{
                    let tra2=Number(prompt("ingrese la nota del trabajo 2"));
                    if ((isNaN(tra2)) || tra2 < 0 || tra2 > 5){
                        console.log("no ingreso datos validos vuelva a intentar");
                    }else{
                        let finalexam=Number(prompt("ingrese la nota del examen final"))
                        if ((isNaN(finalexam)) || finalexam < 0 || finalexam > 5){
                            console.log("noingreso datos validos intente de nuevo");
                        }else{
                            let autoeva=Number(prompt("ingrese la nota de la autoevaluacion"))
                            if ((isNaN(autoeva)) || autoeva < 0 || autoeva > 5){
                                console.log("noingreso datos validos intente de nuevo");
                            }else{
                                let cooeva=Number(prompt("ingrese la nota de la cooevacuacion"));
                                if ((isNaN(cooeva)) || cooeva < 0 || cooeva > 5){
                                    console.log("noingreso datos validos intente de nuevo");
                                }else{
                                    let promedioexam=(exam1+exam2+exam3)/3
                                    let porcentajeexam=((exam1+exam2+exam3)/3)*0.55
                                    let promediotar=(tra1+tra2)/2
                                    let procentajetar=((tra1+tra2)/2)*0.15
                                    let promedioautoeva=(autoeva+cooeva)/2
                                    let procentajeautoeva=((autoeva+cooeva)/2)*0.1
                                    let procentajeexamenfinal=finalexam*0.2
                                    let def=porcentajeexam+procentajetar+procentajeautoeva+procentajeexamenfinal
                                    console.log("su nota es:"+ def);
                                    if (def>=0 && def <= 1.9){
                                        console.log("su nivel es muy bajo");
                                    }else if((def>=2.0 && def <= 2.9)){
                                        console.log("su nivel es bajo");
                                    }else if(def>=3.0 && def <= 3.9){
                                        console.log("su nivel es basico");
                                    }else if(def>=4.0 && def <= 4.6){
                                        console.log("su nivel es alto");
                                    }else if(def>=4.7 && def <= 5.0){
                                        console.log("su nivel es superior");

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

