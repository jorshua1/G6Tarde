class Vehiculo {
    constructor(marca, year, valor) {
        //eso se ejecuta automaticamente cuando se instancia un objeto, pueden haber funciones aca
        console.log("Hola, soy el constructor en la clase Vehiculo");
        this.marca = marca;
        this.year = year;
        this.valor = valor;

        let anosAntiguedad = 2023 - this.year;
        this.antiguedad = anosAntiguedad;
    }

    mostrarMarca(){
        console.log("hola, soy un carro de marca "+this.marca);
    }

    calcularTarifaSoat(porcentaje) {                    
        return (this.valor*porcentaje)/100;
    }

    calcularTanqueada(datosTanqueada){
        let galones = datosTanqueada.galones;
        let valorGalon = datosTanqueada.valorGalon;
        let totalPagar = galones * valorGalon;
        return totalPagar;
    } 
    
    calcularImpuesto(porcentaje) {
        if(this.year > 2015){
            return this.valor*porcentaje;
        }else{
            return this.valor*porcentaje;
        } 
    }
}


let miCarro = new Vehiculo("Chevrolet", 2021, 50000000);
console.log("Años de antiguedad del carro => "+miCarro.antiguedad);
miCarro.mostrarMarca();

let loQuePagoDeSoat = miCarro.calcularTarifaSoat(9);
console.log(loQuePagoDeSoat)

let datosTanqueada = {galones:9, valorGalon:10600}
let totalPagarTanqueada = miCarro.calcularTanqueada(datosTanqueada);
console.log("tienes que pagar en la bomba "+totalPagarTanqueada)            