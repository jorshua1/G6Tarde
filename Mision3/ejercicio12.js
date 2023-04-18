    function positivoNegativo(numero){
        return numero>0?"positivo":numero===0?"cero":"negativo";
    }

    let valor=Number(prompt("Ingrese un numero para determinar si es positivo o negativo"));
    console.log(positivoNegativo(valor));