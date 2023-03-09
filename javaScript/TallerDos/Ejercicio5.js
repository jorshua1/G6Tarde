let C1 = Number(prompt("Ingrese la cantidad de conejos blancos"));
let C2 = Number(prompt("Ingrese la cantidad de conejos negros"));
let n = C1 + C2;
if (isNaN(C1) || isNaN(C2) || C1 < 0 || C2 < 0) {
    alert("Por favor revise los datos e ingrese valores validos ");
} else {
    alert
    let x = Number(prompt("Ingrese la cantidad de conejos negros vendidos"));
    let y = Number(prompt("Ingrese la cantidad de conejos blancos vendidos"));
    
    let P1 = Number(prompt("Ingrese el precio de los conejos blancos (precio por uniad)"));
    let P2 = Number(prompt("Ingrese el precio de los conejos negros (precio por uniad)"));
    if ( x < 0 || y < 0 || P1 < 0 || P2 < 0 || y > C1 || x > C2 || isNaN(x) || isNaN(y) || isNaN(C1) || isNaN(C2) || isNaN(P1) || isNaN(P2)) {
        alert("Por favor revise los datos e ingrese valores validos ");
    } else {
        let vendidos = x + y;
        let total = (vendidos) * (P1 + P2);
        alert("La cantidad total de conejos son: " + n + "\nSe vendiero en total: " + vendidos + " conejos \nEl precio total de la venta es de: " + total);
        if (y > x) {
            alert("Los conejos mas vendidos fueron los de color blanco");
        } else if (x > y) {
            alert("Los conejos mas vendidos fueron los de color negro");
        } else {
            alert("Ambos colores de conejos se vendieron por igual");
        }
    }
}

