let valorHora = Number(prompt("¿Cuánto se le paga por hora al trabajador?"));
let horasTrabajo = 0;
let horasNormal = 0;
let horasDobles = 0;
let horasTriples = 0;
let pago = 0;

if((isNaN(valorHora))||(valorHora<=0)){
    alert("Por favor, ingrese un pago por hora válido")
}else{
    horasTrabajo = Number(prompt("¿Cuántas horas trabajó el empleado?"))
    if((isNaN(horasTrabajo))||(horasTrabajo<=0)){
        alert("Por favor, ingrese un tiempo de trabajo válido")
    }else{
        if(horasTrabajo<=40){
            pago = valorHora*horasTrabajo
            alert("El trabajador laboró: " + horasTrabajo + " horas que se le pagaron de acuerdo al valor por hora base. \nEl salario del trabajador será de: " + pago + "$")
        }else if((horasTrabajo>40)&&(horasTrabajo<=48)){
            horasNormal = 40
            horasDobles = horasTrabajo-40
            pago = (valorHora*horasNormal)+((valorHora*2)*horasDobles)
            alert("El trabajador laboró: " + horasTrabajo + " horas que se le pagaron de la siguiente forma: \nHoras con pago base: " + horasNormal + " = " + (valorHora*horasNormal) + "$\nHoras con pago base duplicado: " + horasDobles + " = " + ((valorHora*2)*horasDobles) + "$\nEl salario del trabajador será de: " + pago + "$")
        }else if(horasTrabajo>48){
            horasNormal = 40
            horasDobles = 8
            horasTriples = horasTrabajo-48
            pago = (valorHora*horasNormal)+((valorHora*2)*horasDobles)+((valorHora*3)*horasTriples)
            alert("El trabajador laboró: " + horasTrabajo + " horas que se le pagaron de la siguiente forma: \nHoras con pago base: " + horasNormal + " = " + (valorHora*horasNormal) + "$\nHoras con pago base duplicado: " + horasDobles + " = " + ((valorHora*2)*horasDobles) + "$\nHoras con pago base triplicado: " + horasTriples + " = " + ((valorHora*3)*horasTriples) + "$\nEl salario del trabajador será de: " + pago + "$")
        }
    }
}