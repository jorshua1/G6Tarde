let dias= Number(prompt("Ingrese dias de instancia"));
let dis= parseFloat(prompt("Ingrese distancia de vuelo (km)"));
precio= dis*2.5;
if(dias>=7 && dis>=800){
  precioPrelimiar= precio-((precio*30)/100)
  precioFinal=precioPrelimiar*2
  alert("Precio sin descuento = " + precio)
  alert("Usted obtuvo un descuento del 30%")
  alert("Precio de ida y vuelta = " + precioPrelimiar)
  alert("Precio total = " + precioFinal)
}else{
    precioFinal=precio*2
    alert("Precio de ida y vuelta = " + precio)
    alert("Precio total = " + precioFinal)
}
