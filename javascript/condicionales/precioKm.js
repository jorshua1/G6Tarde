let precioKm = 0;
let vehiculo = Number(prompt("¿En qué tipo de vehículo viajó? Seleccione la opción de acuerdo a su número. \n1. Coche \n2. Moto \n3. Autobus"));
let kmsRecorridos = 0;
let litrosConsumidos = 0;
let costo = 0;

if((isNaN(vehiculo))||(vehiculo<1)||(vehiculo>3)){
    alert("Por favor, ingrese un valor válido (1,2 o 3)");
}else{
    kmsRecorridos = Number(prompt("¿Cuántos kms recorrieron?"));
    if((isNaN(kmsRecorridos))||(kmsRecorridos<=0)){
        alert("Por favor, ingrese una cantidad válida de kilómetros.");
    }else{
        switch(vehiculo){
            case 1:
                precioKm = 0.10;
                litrosConsumidos = kmsRecorridos*0.5;
                if((litrosConsumidos>=0)&&(litrosConsumidos<=100)){
                    costo = (kmsRecorridos*precioKm)+1;
                    alert("Vehículo: Coche \nKM recorridos: " + kmsRecorridos + "km \nPrecio Km: " + precioKm + "$ \nLitros consumidos: " + litrosConsumidos + "L \nCosto total: " + costo + "$");
                }else{
                    costo = (kmsRecorridos*precioKm)+2;
                    alert("Vehículo: Coche \nKM recorridos: " + kmsRecorridos + "km \nPrecio Km: " + precioKm + "$ \nLitros consumidos: " + litrosConsumidos + "L \nCosto total: " + costo + "$");
                }
                break;
            case 2:
                precioKm = 0.20;
                litrosConsumidos = kmsRecorridos*0.25;
                if((litrosConsumidos>=0)&&(litrosConsumidos<=100)){
                    costo = (kmsRecorridos*precioKm)+1;
                    alert("Vehículo: Moto \nKM recorridos: " + kmsRecorridos + "km \nPrecio Km: " + precioKm + "$ \nLitros consumidos: " + litrosConsumidos + "L \nCosto total: " + costo + "$");
                }else{
                    costo = (kmsRecorridos*precioKm)+2;
                    alert("Vehículo: Moto \nKM recorridos: " + kmsRecorridos + "km \nPrecio Km: " + precioKm + "$ \nLitros consumidos: " + litrosConsumidos + "L \nCosto total: " + costo + "$");
                }
                break;
            case 3:
                precioKm = 0.5;
                litrosConsumidos = kmsRecorridos*0.75;
                if((litrosConsumidos>=0)&&(litrosConsumidos<=100)){
                    costo = (kmsRecorridos*precioKm)+1;
                    alert("Vehículo: Autobus \nKM recorridos: " + kmsRecorridos + "km \nPrecio Km: " + precioKm + "$ \nLitros consumidos: " + litrosConsumidos + "L \nCosto total: " + costo + "$");
                }else{
                    costo = (kmsRecorridos*precioKm)+2;
                    alert("Vehículo: Autobus \nKM recorridos: " + kmsRecorridos + "km \nPrecio Km: " + precioKm + "$ \nLitros consumidos: " + litrosConsumidos + "L \nCosto total: " + costo + "$");
                }
                break;
            default:
                alert("Ha ocurrido un error, por favor, inténtelo de nuevo.")
                break;
        }
    }
}