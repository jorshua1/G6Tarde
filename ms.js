
    //Familiares
    let cantidadFamiliares = 0 ;
    //Caracteristicas Familiares
    let nombre="";
    let peso=0;
    let altura=0;
    let parentesco ="";
    let edad =0;
    // operaciones
    let contadorPeso =0;
    let contadorAltura =0;
    let calculoTotal = 0;
    let indiceMasaCorporal =0
    let totalIMC =0

    do{//Menu Principal
        opcionMenuPrincipal = Number(prompt("Ingrese la opcion que desea realizar:\n1.Ingresar Familiares\n2.Datos para calculo de cada familiar\n3.Mostrar Resultados\n4.Salir"))
        switch(opcionMenuPrincipal){
            
            case 1:
                do{
                //Ingresar Familiares
                opcionSubMenuFamilia = Number(prompt("Ingrese la opcion que desea realizar:\n1.Ingrese la cantidad de familiares\n2.Numero de Familiares Ingresados\n3.Volver"))
                switch(opcionSubMenuFamilia){ // SubMenu Ingreso de Familiares
                    case 1:
                        do{
                        if(cantidadFamiliares == 0){
                        cantidadFamiliares = Number(prompt("Ingrese la cantidad de familiares que tiene la familia"))
                        }else{
                            alert("No puede ingresar mas familiares")
                        }
                    }while(cantidadFamiliares<0 || isNaN(cantidadFamiliares) || cantidadFamiliares<=0)
                        break;
                    case 2:
                        if(cantidadFamiliares<=0){
                            alert("No hay familiares ingresados")
                        }else{
                        alert("Hay una cantidad de "+cantidadFamiliares+" familiares actualmente.")
                        }
                        break;
                    case 3:
                        alert("Regresando al Menú")
                        break;

                    default:
                        alert("Ingrese valores,recuerde que solo se admiten opciones de 1 a 2")
                }
            }while(opcionSubMenuFamilia!==3) // fin do
                break;
            case 2:
                do{
                    opcionSubMenuDatos =Number(prompt("Ingrese la opcion que desea realizar:\n1.Registrar Familiar\n2.Volver"))
                    switch(opcionSubMenuDatos){ // SubMenú Datos
                     
                        case 1:
                            for (let i = 1; i <= cantidadFamiliares; i++) {
                            do{
                                parentesco = prompt(`Ingrese el parentesco del familiar ${i}`);
                                }while(parentesco =="")
                            do{    
                             nombre = prompt(`Ingrese el nombre del familiar ${i}:`);

                            }while(nombre == "")
                            
                            do{
                                edad = Number(prompt(`Ingrese la edad del familiar ${i}:`));
                                if(edad<100 || isNaN(edad) || edad<=0){
                                    alert("Ingresado con exito")
                                }else{
                                    alert("La edad ingresada es ficticia o ingreso valores erroneos")
                                }
                            }while(isNaN(edad) || edad<=0 || edad>100)

                            do{
                                peso = Number(prompt(`Ingrese el peso del familiar ${i}:`));
                                if(peso<400 || isNaN(peso) || peso<0){
                                    alert("Ingresado con exito")
                                    }else{
                                        alert("El peso ingresado es ficticio o ingreso valores erroneos")
                                    }
                            }while(isNaN(peso) || edad<=0 || edad>100)
                                
                            do{
                                altura = Number(prompt(`Ingrese la altura del familiar ${i}:`));
                                if(altura<2.50 || isNaN(altura) || altura<0){ 
                                    alert("Ingresado con exito")
                                    }else{
                                        
                                        alert("La altura ingresada es ficticia o ingreso valores erroneos")
                                    }
                            }while(isNaN(altura) || altura<=0 || altura>3)
                               calculoTotal = peso/altura**2
                               totalIMC = calculoTotal+calculoTotal
                            
                                alert(`Familiares ingresados ${cantidadFamiliares}:\nFamiliar ${nombre}\nEdad: ${edad}\nParentesco:${parentesco}\nPeso: ${peso}\nAltura: ${altura} `)
                            }
                            break;
                        case 2:
                              
                                alert(`Volviendo el Menú`)
                            break;
                        default:
                            alert("Ingreso valores invalidos ,recuerde que solo se admiten opciones de 1 a 2")
                    }

                }while(opcionSubMenuDatos!==2) // fin do
                break;
            case 3:
                indiceMasaCorporal=totalIMC/cantidadFamiliares
                if(indiceMasaCorporal<18.5){
                    alert("Nivel de peso bajo de la Familia");
                 }else if(indiceMasaCorporal>=18.5 && indiceMasaCorporal <=24.9){
                    alert("Nivel de peso Normal de la Familia");
                 }else if(indiceMasaCorporal>=25.0 && indiceMasaCorporal<=28.9){
                    alert("Nivel de peso Sobrepeso de la Familia");
                 }else if(indiceMasaCorporal>= 29.0 && indiceMasaCorporal<=34.9){
                    alert("Nivel de peso Obeso 1 de la Familia");
                 }else if(indiceMasaCorporal>=35.0){
                    alert("Nivel de peso Obeso 2 de la Familia");
                 }
                break;
            case 4:
                alert("Hasta Pronto")
                break;
            default:
                alert("Ingrese valores validos, recuerde que solo se admiten opciones de 1 a 4")
        }

    }while(opcionMenuPrincipal!==4)// fin do
