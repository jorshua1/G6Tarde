// ejemplo para explicar else if :)
let edad = Number(prompt("ingrese la edad"));
if (isNaN(edad)) {
  console.log("error, ¿usted es alienigena o que?");
} else if (edad > 1 && edad >= 18 && edad < 125) {
  console.log("es mayor de edad");
} else if (edad > 1 && edad < 18) {
  console.log("es menor de edad");
} else {
  console.log("ingrese una edad valida");
}
//
let numero = Number(prompt("ingrese el numero"));
let par=numero/2;
if (isNaN(numero)) {
  console.log("error");
} else if (Number.isInteger(par) && par > 0) {
  console.log("el numero es par");
} else if ((numero =0)) {
  console.log("el numero es 0");
} else {
  console.log("el numero es impar");
}
 
// propuesta de ejercicio//
let num1=(parseInt(prompt("ingrese su edad")));
let num2=(parseInt(prompt("ingrese su indice de masa muscular(si no sabe como sacarlo pues busque en google)")));
let num3=(parseInt(prompt("ingrese cuanto ejercicio hace a la semana en minutos")));

if (isNaN(num1 || num2 || num3)) { 
  console.log("error")}
 else if ((num1 > 19 && num1 <= 24)) 
{
     if(num2>=19 && num2<=24){
        if(num3>=300 && num3<=150){
        console.log("su indice de masa corporal es ideal y esta mamadisimo")}
        else if(num3>=60 && num3<=149){
            console.log("su indice de masa corporal es ideal pero podrias hacer mas ejercicio")
        }
        else if(num3>=0 && num3<=59){
            console.log("su indice de masa corporal es ideal pero debe empezar a hacer ejercio")
        }
    }

    else if(num2>=0 && num2<=23){
        if(num3>=300 && num3<=150){
        console.log("su indice no es la ideal deberia ser minimo 24 pero caucho que se ejercite")}
        else if(num3>=60 && num3<=149){
            console.log("su indice no es la ideal deberia ser minimo 24 y podria hacer un poco mas de ejercicio")
        }
        else if(num3>=0 && num3<=59){
            console.log("su indice de masa corporal no es la ideal y deberia empezar a hacer ejercicio")
        }}

        if(num2>=20 && num2<=25){
            if(num3>=300 && num3<=150){
            console.log("su indice de masa corporal es ideal y esta mamadisimo")}
            else if(num3>=60 && num3<=149){
                console.log("su indice de masa corporal es ideal pero podrias hacer mas ejercicio")
            }
            else if(num3>=0 && num3<=59){
                console.log("su indice de masa corporal es ideal pero debe empezar a hacer ejercio")
            }
        }
        else if(num2>=0 && num2<=23){
            if(num3>=300 && num3<=150){
            console.log("su indice no es la ideal deberia ser minimo 24 pero caucho que se ejercite")}
            else if(num3>=60 && num3<=149){
                console.log("su indice no es la ideal deberia ser minimo 24 y podria hacer un poco mas de ejercicio")
            }


 
else {
  console.log("ingrese una edad valida");
}

}
}
