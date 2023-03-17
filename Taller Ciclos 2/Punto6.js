const personas = [
    { edad: 10, peso: 25 },
    { edad: 25, peso: 60 },
    { edad: 40, peso: 70 },
    { edad: 65, peso: 55 },
  ];
  let pesoNinos = 0;
  let pesoJovenes = 0;
  let pesoAdultos = 0;
  let pesoViejos = 0;
  let countNinos = 0;
  let countJovenes = 0;
  let countAdultos = 0;
  let countViejos = 0;
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad <= 12) {
      pesoNinos += personas[i].peso;
      countNinos++;
    } else if (personas[i].edad <= 29) {
      pesoJovenes += personas[i].peso;
      countJovenes++;
    } else if (personas[i].edad <= 59) {
      pesoAdultos += personas[i].peso;
      countAdultos++;
    } else {
      pesoViejos += personas[i].peso;
      countViejos++;
    }
  }
  const promedioPesoNinos = pesoNinos / countNinos;
  const promedioPesoJovenes = pesoJovenes / countJovenes;
  const promedioPesoAdultos = pesoAdultos / countAdultos;
  const promedioPesoViejos = pesoViejos / countViejos;
  console.log(`Promedio de peso para niños (0-12 años): ${promedioPesoNinos} kg`);
  console.log(`Promedio de peso para jóvenes (13-29 años): ${promedioPesoJovenes} kg`);
  console.log(`Promedio de peso para adultos (30-59 años): ${promedioPesoAdultos} kg`);
  console.log(`Promedio de peso para viejos (60 años o más): ${promedioPesoViejos} kg`);
  
  