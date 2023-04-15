opcion = 0
acumuladorFamiliar = 0
acumuladorImc = 0
promedioTotalImc = 0




alert("Bienvenido")
alert("Para usar el programa debe ser mayor de 20 años")




edad = parseInt(prompt("Digite su edad: "))
while (isNaN(edad) || edad <= 0) {
    alert("Por favor digite una edad válida:");
}




if (edad < 20) {




    alert("Usted no puede usar el programa.")
    alert("Saliendo")




} else {
    while (opcion !== 3) {

        opcion = parseInt(prompt(
            "Por favor seleccione una opción \n\n ----------MENÚ----------  \n 1. Ingresar Familiar \n 2. Mostrar Resultados \n 3. Salir "
        ));

        while (isNaN(opcion) || opcion < 0 || opcion > 3) {
            alert("Por favor seleccione una opción válida para el menú");
            opcion = prompt(
                "Por favor seleccione una opción \n\n ----------MENÚ---------- \n 1. Ingresar Familiar \n 2. Mostrar Resultados \n 3. Salir "
            );
        }

        switch (opcion) {

            case 1:
                acumuladorFamiliar = acumuladorFamiliar + 1




                alert("Ingresar Familiar")
                nombre = prompt("Digite el nombre del familiar")
                while (!isNaN(nombre)) {
                    alert("Por favor digite un nombre válido para el familiar.");
                    nombre = prompt("Digite el nombre del familiar")
                }


                parentesco = prompt("Digite el parentesco del familiar")
                while (!isNaN(parentesco)) {
                    alert("Por favor digite un parentesco válido para el familiar.");
                    parentesco = prompt("Digite el parentesco del familiar")
                }


                peso = parseFloat(prompt("Digite el peso (en Kilogramos) para " + nombre))
                while (isNaN(peso) || peso <= 0 || peso >= 500) {
                    alert("Por favor digite un peso valido para el familiar.");
                    peso = parseFloat(prompt("Digite el peso (en Kilogramos) para " + nombre))
                }

                altura = parseFloat(prompt("Digite la altura (en Metros) para " + nombre))
                while (isNaN(altura) || altura <= 0) {
                    alert("Por favor digite una altura valida para el familiar.");
                    altura = parseFloat(prompt("Digite la altura (en Metros) para " + nombre))
                }

                IMC = (peso) / (altura ** 2)
                alert("el IMC para " + nombre + " es de " + IMC)
                acumuladorImc = acumuladorImc + IMC

                if (IMC > 0 && IMC <= 18.5) {

                    estado = ("se encuentra en la categoría BAJO DE PESO")

                } else if (IMC > 18.5 && IMC <= 24.9) {

                    estado = ("se encuentra en la categoría NORMAL DE PESO")

                } else if (IMC > 24.9 && IMC <= 28.9) {

                    estado = ("se encuentra SOBRE PESO")


                } else if (IMC > 28.9 && IMC <= 34.9) {

                    estado = ("se encuentra en la categoria OBESO I")

                } else if (IMC > 34.9) {

                    estado = ("se encuentra en la categoria OBESO II")

                }

                alert(nombre + "( " + parentesco + " )" + " " + estado)
                console.log(nombre + "( " + parentesco + " )" + " " + estado)

                break;

            case 2:




                if (acumuladorFamiliar === 0) {




                    alert("No es posible mostrar datos, puesto que no hay familiares registrados.")




                } else {




                    promedioTotalImc = acumuladorImc / acumuladorFamiliar




                    alert("Resultados: ")
                    alert("La cantidad de familiares ingresados es " + acumuladorFamiliar + "\nEl total del IMC para todos los familiares es: " + acumuladorImc + "\nEl promedio del IMC para su familia es: " + promedioTotalImc)




                }








                if (promedioTotalImc > 0 && promedioTotalImc <= 18.5) {




                    alert("El promedio de IMC de su familia se encuentra en la categoria BAJO DE PESO")




                } else if (promedioTotalImc > 18.5 && promedioTotalImc <= 24.9) {




                    alert("El promedio de IMC de su familia se encuentra en la categoria NORMAL DE PESO")




                } else if (promedioTotalImc > 24.9 && promedioTotalImc <= 28.9) {




                    alert("El promedio de IMC de su familia se encuentra en la categoria SOBRE PESO")




                } else if (promedioTotalImc > 28.9 && promedioTotalImc <= 34.9) {




                    alert("El promedio de IMC de su familia se encuentra en la categoria OBESO I")




                } else if (promedioTotalImc > 34.9) {




                    alert("El promedio de IMC de su familia se encuentra en la categoria OBESO II")




                }




                break;

            case 3:
                break;




                alert("Saliendo del programa")

            default:
                alert("Por favor ingrese una opcion valida")
                break;
        }

    }

 alert("Gracias por usar la aplicación.")

}
