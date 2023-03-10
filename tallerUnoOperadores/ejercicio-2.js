/*un individuo desea invertir su capital en un banco y desea saber cuanto dinero ganará
después de un mes si el banco paga razón de  1.2% mensual*/

let capitalInvertido = parseInt(prompt("Por favor ingre valor a invertir :"));
let porcentajeBanco = parseFloat(prompt("por favor ingrese porcentaje de ganancia esperado :"));

ganancia = capitalInvertido * (porcentajeBanco / 100);

console.log(ganancia);