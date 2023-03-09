let nom= prompt("Ingrese producto a comprar");
let valor= Number(prompt("Ingrese valor"));
let cantidad= Number(prompt("Ingrese cantidad"));
let cod= Number(prompt("Ingrese clave (1 o 2)"));
let valorPreliminar= valor*cantidad;
switch(cod){
    case 1:
        let valTotal= valorPreliminar - ((valorPreliminar*10)/100);
        alert("producto = " + nom)
        alert("cantidad = " + cantidad)
        alert("clave = " + cod)
        alert("Valor original = " + valorPreliminar)
        alert("Valor con descuento = " + valTotal)
    break;
    case 2:
        let valTotal2= valorPreliminar -((valorPreliminar*20)/100);
        alert("producto = " + nom)
        alert("cantidad = " + cantidad)
        alert("clave = " + cod)
        alert("Valor original = " + valorPreliminar)
        alert("Valor con descuento = " + valTotal2)
    break;
    default:
        alert("Ingrese una clave valida")
}
