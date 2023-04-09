/*un individuo desea invertir su capital en un banco y desea saber cuanto dinero ganará
después de un mes si el banco paga razón de  1.2% mensual*/

let capitalInvertido = 1000000; /*parseInt(prompt("Por favor ingre valor a invertir :"));*/
let porcentajeBanco = 1.2; /*parseFloat(prompt("por favor ingrese porcentaje de ganancia esperado :"));*/

ganancia = capitalInvertido * (porcentajeBanco / 100);

console.log("El individuo ganará $" + ganancia + " por el $" + capitalInvertido + " incial inverido.");
console.log(`
El individuo ganará $${ganancia}
Por el $${capitalInvertido} incial inverido.`);