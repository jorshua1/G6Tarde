let totalConejos =Number(prompt("Ingrese la cantidad de conejos que hay"));


if (isNaN(totalConejos) || totalConejos<0){
    alert("Ingrese un valor correcto. ")
}else{
    let conejosBlancos= Number(prompt("Ingrese la cantidad total de conejos blancos que hay: "));
    if (isNaN(conejosBlancos)|| conejosBlancos<0 || conejosBlancos>totalConejos){
            alert("EL valor ingresado no es correcto o no coincide con los datos previamente marcados.")
    }else{
        let precioBlanco=Number(prompt("Ingrese el precio por conejo blanco"));
        let conejosNegros=Number(prompt("Ingrese la cantidad de conejos negros que hay: "));
        if (isNaN(conejosNegros)||isNaN(precioBlanco)||precioBlanco<0 || conejosNegros<0 || conejosNegros>totalConejos|| ((conejosBlancos+conejosNegros)>totalConejos)){
            alert("EL valor ingresado no es correcto o no coincide con los datos previamente marcados.")
        }else{
            let precioNegro=Number(prompt("Ingrese el precio por conejo negro"));
            let vendidosBlancos= Number(prompt("Ingrese la cantidad de conejos blancos que se vendieron: "))
            if (isNaN(vendidosBlancos)||isNaN(precioNegro)||precioNegro<0|| vendidosBlancos>conejosBlancos ||vendidosBlancos<0){
                alert("EL valor ingresado no es correcto o no coincide con los datos previamente marcados.")
            }else{
                let vendidosNegros=Number(prompt("Ingrese la cantidad de conejos negros que se vendieron: "));
                if (isNaN(vendidosNegros)|| vendidosNegros>conejosNegros|| vendidosNegros<0){
                    alert("EL valor ingresado no es correcto o no coincide con los datos previamente marcados.")
                }else{
                    let totalConejosVendidos=(vendidosBlancos+vendidosNegros);
                    let totalVenta=((vendidosBlancos*precioBlanco)+(vendidosNegros*precioNegro));
                    if (vendidosBlancos>vendidosNegros){
                        alert("La cantidad de conejos vendida "+totalConejosVendidos +"\nEl monto final de la venta es: "+totalVenta+"\nLos conejos blancos fueron los que más se vendieron ");
                    }else{
                        alert("La cantidad de conejos vendida "+totalConejosVendidos +"\n El monto final de la venta es: "+totalVenta+"\nLos conejos negros fueron los que más se vendieron ");
                    }
                }
            }
                    
        }
    }
}
