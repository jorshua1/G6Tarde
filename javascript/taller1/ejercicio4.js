salario= 980000
comision= 170000
valorPorcentajeVenta=5/100
numeroCoches=parseInt(prompt("dijite el numero total de los coches vendidos: "))
valorCoche=parseInt(prompt("dijite el valor total de los coches vendidos: "))

comisionTotal=comision+(valorCoche*valorPorcentajeVenta);
comisionCoches=comision*numeroCoches;
sueltoTotal=comisionTotal+comisionCoches+salario;


console.log("El salario total del trabajador es de; "+sueltoTotal+ " pesos");