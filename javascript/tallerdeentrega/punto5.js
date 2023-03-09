let preciocb = Number(prompt("ingrese el precio de los conejos blancos"));
if (isNaN(preciocb) || preciocb <= 0) {
  console.log("valor invalido");
} else {
  let preciocn = Number(prompt("ingrese el precio de los conejos negros"));
  if (isNaN(preciocn) || preciocn <= 0) {
    console.log("valor invalido");
  } else {
    let cantblancos = Number(prompt("ingrese la cantidad de conejos blancos"));
    if (isNaN(cantblancos) || cantblancos <= 0) {
      console.log("valor invalido");
    } else {
      let cantnegros = Number(prompt("ingrese la cantidad de conejos negros"));
      if (isNaN(cantnegros) || cantnegros <= 0) {
        console.log("valor invalido");
      } else {
        let cantidadvendidos = Number(
          prompt("ingrese de conejos blancos vendidos")
        );
        if (isNaN(cantidadvendidos) || (cantidadvendidos <= 0) || (cantidadvendidos>cantblancos) ) {
          console.log("valor invalido");
        } else {
          let cantidadnegrosvendidos = Number(prompt("ingrese de conejos negros vendidos"));
          if (isNaN(cantidadnegrosvendidos) || (cantidadnegrosvendidos <= 0) || (cantidadnegrosvendidos>cantnegros)) {
            console.log("valor invalido");
          } else {
            let conejostovendidos = cantidadvendidos + cantidadnegrosvendidos;
            console.log("se vendieron" + conejostovendidos);
            let totalbla = cantidadnegrosvendidos * preciocb;
            let totalne = cantidadnegrosvendidos * preciocn;
            let totalt = totalbla + totalne;
            console.log("el total a pagar es" + totalt);
            if (cantidadvendidos > cantidadnegrosvendidos) {
              console.log("se vendieron mas conejos blancos");
            } else if (cantidadnegrosvendidos > cantidadvendidos) {
              console.log("se vendieron mas conejos negros");
            } else {
              console.log("se vendieron la misma cantidad de conejos");
            }
          }
        }
      }
    }
  }
}
