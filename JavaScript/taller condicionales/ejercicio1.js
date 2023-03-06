//ejercicio Daniel Jay (mio)
let vVenta=Number(prompt("Ingrese valor venta"));
if(isNaN(vVenta) || vVenta<=0){
    alert("ERROR: Ingrese un dato valido")
}else if(vVenta>=250000){
    let precio1= vVenta - (vVenta*0.3)
    alert("Su descuento fue del 30%")
    alert("Total a pagar:"+precio1)
}else if(vVenta<250000 && vVenta>=200000){
    let precio2= vVenta - (vVenta*0.2)
    alert("Su descuento fue del 20%")
    alert("Total a pagar:"+precio2)
}else if(vVenta<200000 && vVenta>=50000){
    alert("Su compra no tiene descuento")
    alert("Total a pagar:"+vVenta)
}else if(vVenta<50000){
    let precio3= vVenta+2000
    alert("Su compra no tiene descuento")
    alert("Total a pagar:"+precio3)
}