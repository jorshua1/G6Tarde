// propuesta de ejercicio//
/*
hacer un algoritmo para saber si estoy gordo o estoy mamadisimo;
ingrese su edad,peso y altura para obtener su indice de masa corporal y adicional ingresar cuanto tiempo
se ejercita a la semana(en minutos) y me diga si mi indice de masa corporal es ideal para mi edad o tengo
sobre peso y si deberia hacer mas ejercicio o si esta bien con el que hago en la semana.
*/

let num1 = (Number(prompt("ingrese su edad")));
let altura1=(Number(prompt("ingrese su altura en metros")));
let peso1=(Number(prompt("ingrese su peso en kilogramos")));
let num3=(Number(prompt("ingrese cuanto ejercicio hace a la semana en minutos")));
let num2=((peso1)/(altura1**2));

if (isNaN(num1 || num2 || num3 || peso1 || altura1 || num1>120 || altura1>3 || peso1>150)) { 
  console.log("error, uno de los datos que ingreso no es valido")}
 else if ((num1 >= 19 && num1 <= 24))  
{
     if(num2>=19 && num2<=24.99){
        if(num3>=150 && num3<=300){
        console.log("su indice de masa corporal es ideal y haces suficiente ejercicio")}
        else if(num3>=60 && num3<=149){
            console.log("su indice de masa corporal es ideal pero podrias hacer mas ejercicio")
        }
        else if(num3>=0 && num3<=59){
            console.log("su indice de masa corporal es ideal pero debe empezar a hacer ejercio")
        }
    }
    else if(num2>=25 && num2<=30.99){
        if(num3>=300 && num3<=150){
        console.log("su indice no es la ideal, usted tiene sobrepeso y esta por debajo pero caucho que se ejercite")}
        else if(num3>=60 && num3<=149){
            console.log("su indice no es la ideal ,usted tiene sobrepeso; podria hacer un poco mas de ejercicio y mejorar su alimentación")
        }
        else if(num3>=0 && num3<=59){
            console.log("su indice de masa corporal no es la ideal, usted tiene sobrepeso y deberia empezar a hacer ejercicio")
        }}
        else if(num2>=31 && num2<=60){
            if(num3>=300 && num3<=150){
            console.log("usted tiene obecidad y siga ejercitandose asi y cuide su alimentacion")}
            else if(num3>=60 && num3<=149){
                console.log("usted tiene obesidad, deberia ejercitarse mas y cuidar su alimentacion")
            }
            else if(num3>=0 && num3<=59){
                console.log("usted tiene obesidad usted deberia empezar a hacer ejercicio y cuidar su alimentacion")
            }}
    else if(num2>=0 && num2<=18.99){
        if(num3>=300 && num3<=150){
        console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo pero caucho que se ejercite")}
        else if(num3>=60 && num3<=149){
            console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo, tambien podria hacer un poco mas de ejercicio y mejorar su alimentación")
        }
        else if(num3>=0 && num3<=59){
            console.log("su indice de masa corporal no es la ideal y deberia empezar a hacer ejercicio")
        }}
    }

    else if ((num1 >= 25 && num1 <= 34))  
    {
         if(num2>=20 && num2<=25.99){
            if(num3>=150 && num3<=300){
            console.log("su indice de masa corporal es ideal y haces suficiente ejercicio")}
            else if(num3>=60 && num3<=149){
                console.log("su indice de masa corporal es ideal pero podrias hacer mas ejercicio")
            }
            else if(num3>=0 && num3<=59){
                console.log("su indice de masa corporal es ideal pero debe empezar a hacer ejercio")
            }
        }
        else if(num2>=26 && num2<=30.99){
            if(num3>=300 && num3<=150){
            console.log("su indice no es la ideal, usted tiene sobrepeso y esta por debajo pero caucho que se ejercite")}
            else if(num3>=60 && num3<=149){
                console.log("su indice no es la ideal ,usted tiene sobrepeso; podria hacer un poco mas de ejercicio y mejorar su alimentación")
            }
            else if(num3>=0 && num3<=59){
                console.log("su indice de masa corporal no es la ideal, usted tiene sobrepeso y deberia empezar a hacer ejercicio")
            }}
            else if(num2>=31 && num2<=60){
                if(num3>=300 && num3<=150){
                console.log("usted tiene obecidad y siga ejercitandose asi y cuide su alimentacion")}
                else if(num3>=60 && num3<=149){
                    console.log("usted tiene obesidad, deberia ejercitarse mas y cuidar su alimentacion")
                }
                else if(num3>=0 && num3<=59){
                    console.log("usted tiene obesidad usted deberia empezar a hacer ejercicio y cuidar su alimentacion")
                }}
        else if(num2>=0 && num2<=19.99){
            if(num3>=300 && num3<=150){
            console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo pero caucho que se ejercite")}
            else if(num3>=60 && num3<=149){
                console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo, tambien podria hacer un poco mas de ejercicio y mejorar su alimentación")
            }
            else if(num3>=0 && num3<=59){
                console.log("su indice de masa corporal no es la ideal y deberia empezar a hacer ejercicio")
            }}
        }

        else if ((num1 >=35 && num1 <=44))  
        {
             if(num2>=21 && num2<=26.99){
                if(num3>=150 && num3<=300){
                console.log("su indice de masa corporal es ideal y haces suficiente ejercicio")}
                else if(num3>=60 && num3<=149){
                    console.log("su indice de masa corporal es ideal pero podrias hacer mas ejercicio")
                }
                else if(num3>=0 && num3<=59){
                    console.log("su indice de masa corporal es ideal pero debe empezar a hacer ejercio")
                }
            }
            else if(num2>=27 && num2<=30.99){
                if(num3>=300 && num3<=150){
                console.log("su indice no es la ideal, usted tiene sobrepeso y esta por debajo pero caucho que se ejercite")}
                else if(num3>=60 && num3<=149){
                    console.log("su indice no es la ideal ,usted tiene sobrepeso; podria hacer un poco mas de ejercicio y mejorar su alimentación")
                }
                else if(num3>=0 && num3<=59){
                    console.log("su indice de masa corporal no es la ideal, usted tiene sobrepeso y deberia empezar a hacer ejercicio")
                }}
                else if(num2>=31 && num2<=60){
                    if(num3>=300 && num3<=150){
                    console.log("usted tiene obecidad y siga ejercitandose asi y cuide su alimentacion")}
                    else if(num3>=60 && num3<=149){
                        console.log("usted tiene obesidad, deberia ejercitarse mas y cuidar su alimentacion")
                    }
                    else if(num3>=0 && num3<=59){
                        console.log("usted tiene obesidad usted deberia empezar a hacer ejercicio y cuidar su alimentacion")
                    }}
            else if(num2>=0 && num2<=22.99){
                if(num3>=300 && num3<=150){
                console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo pero caucho que se ejercite")}
                else if(num3>=60 && num3<=149){
                    console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo, tambien podria hacer un poco mas de ejercicio y mejorar su alimentación")
                }
                else if(num3>=0 && num3<=59){
                    console.log("su indice de masa corporal no es la ideal y deberia empezar a hacer ejercicio")
                }}
            }
            else if ((num1 >= 45 && num1 <= 54))  
            {
                 if(num2>=22 && num2<=27.99){
                    if(num3>=150 && num3<=300){
                    console.log("su indice de masa corporal es ideal y haces suficiente ejercicio")}
                    else if(num3>=60 && num3<=149){
                        console.log("su indice de masa corporal es ideal pero podrias hacer mas ejercicio")
                    }
                    else if(num3>=0 && num3<=59){
                        console.log("su indice de masa corporal es ideal pero debe empezar a hacer ejercio")
                    }
                }
                else if(num2>=28 && num2<=30.99){
                    if(num3>=300 && num3<=150){
                    console.log("su indice no es la ideal, usted tiene sobrepeso y esta por debajo pero caucho que se ejercite")}
                    else if(num3>=60 && num3<=149){
                        console.log("su indice no es la ideal ,usted tiene sobrepeso; podria hacer un poco mas de ejercicio y mejorar su alimentación")
                    }
                    else if(num3>=0 && num3<=59){
                        console.log("su indice de masa corporal no es la ideal, usted tiene sobrepeso y deberia empezar a hacer ejercicio")
                    }}
                    else if(num2>=31 && num2<=60){
                        if(num3>=300 && num3<=150){
                        console.log("usted tiene obecidad y siga ejercitandose asi y cuide su alimentacion")}
                        else if(num3>=60 && num3<=149){
                            console.log("usted tiene obesidad, deberia ejercitarse mas y cuidar su alimentacion")
                        }
                        else if(num3>=0 && num3<=59){
                            console.log("usted tiene obesidad usted deberia empezar a hacer ejercicio y cuidar su alimentacion")
                        }}
                else if(num2>=0 && num2<=21.99){
                    if(num3>=300 && num3<=150){
                    console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo pero caucho que se ejercite")}
                    else if(num3>=60 && num3<=149){
                        console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo, tambien podria hacer un poco mas de ejercicio y mejorar su alimentación")
                    }
                    else if(num3>=0 && num3<=59){
                        console.log("su indice de masa corporal no es la ideal y deberia empezar a hacer ejercicio")
                    }}
                }
            
                else if ((num1 >= 55 && num1 <= 64))  
                {
                     if(num2>=23 && num2<=28){
                        if(num3>=150 && num3<=300){
                        console.log("su indice de masa corporal es ideal y haces suficiente ejercicio")}
                        else if(num3>=60 && num3<=149){
                            console.log("su indice de masa corporal es ideal pero podrias hacer mas ejercicio")
                        }
                        else if(num3>=0 && num3<=59){
                            console.log("su indice de masa corporal es ideal pero debe empezar a hacer ejercio")
                        }
                    }
                    else if(num2>=28 && num2<=30.99){
                        if(num3>=300 && num3<=150){
                        console.log("su indice no es la ideal, usted tiene sobrepeso y esta por debajo pero caucho que se ejercite")}
                        else if(num3>=60 && num3<=149){
                            console.log("su indice no es la ideal ,usted tiene sobrepeso; podria hacer un poco mas de ejercicio y mejorar su alimentación")
                        }
                        else if(num3>=0 && num3<=59){
                            console.log("su indice de masa corporal no es la ideal, usted tiene sobrepeso y deberia empezar a hacer ejercicio")
                        }}
                        else if(num2>=31 && num2<=60){
                            if(num3>=300 && num3<=150){
                            console.log("usted tiene obecidad y siga ejercitandose asi y cuide su alimentacion")}
                            else if(num3>=60 && num3<=149){
                                console.log("usted tiene obesidad, deberia ejercitarse mas y cuidar su alimentacion")
                            }
                            else if(num3>=0 && num3<=59){
                                console.log("usted tiene obesidad usted deberia empezar a hacer ejercicio y cuidar su alimentacion")
                            }}
                    else if(num2>=0 && num2<=22.99){
                        if(num3>=300 && num3<=150){
                        console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo pero caucho que se ejercite")}
                        else if(num3>=60 && num3<=149){
                            console.log("su indice no es la ideal deberia ser minimo 24 y esta por debajo, tambien podria hacer un poco mas de ejercicio y mejorar su alimentación")
                        }
                        else if(num3>=0 && num3<=59){
                            console.log("su indice de masa corporal no es la ideal y deberia empezar a hacer ejercicio")
                        }}
                    }
                


else {
  console.log("ingrese una edad valida");
}



