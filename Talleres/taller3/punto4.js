let primerDecimal = 1;
let segundoDecimal = 1;
let secuencia = ""

for(primerDecimal;primerDecimal<=5;primerDecimal++){
    segundoDecimal = 1
    secuencia = secuencia + "\n"
    for(segundoDecimal;segundoDecimal<=4;segundoDecimal++){
        secuencia = secuencia + "1." + primerDecimal + "." + segundoDecimal + " - "
    }
}
alert(secuencia)