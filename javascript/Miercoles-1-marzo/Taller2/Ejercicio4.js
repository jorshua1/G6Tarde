    let x = Number(prompt("Ingrese cuantos minutos duró la llamada"));
    let total

    if (x <= 3) {
        total = 200
    } else if (x > 3) {
        total = 200 + (x - 3)*100
    }
    alert("El costo de la llamada es de  $"+ total );