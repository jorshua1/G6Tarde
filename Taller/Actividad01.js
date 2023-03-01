{
    let vNum01 = parseInt(prompt("agregue sus numeros"));
    let vNum02 = parseInt(prompt("agregue sus numeros"));
    
    vSum = vNum01 + vNum02;
    console.log(vSum)
    }
    
    /*------------- Ejercicio 2 -------------------------------------*/
    
    {
    let vDistance = parseInt(prompt("Ingrese la distacia"));
    let vCar01 = parseInt(prompt("Ingrese la velocidad"));
    let vCar02 = parseInt(prompt("Ingrese la velocidad"));
    let vTime;
    
    vTime = vDistance / (vCar01 - vCar02);
    vTime = vTime * 60;
    
    console.log("la distacia es",vDistance,"Km");
    console.log("el auto lo alcanza",vTime,"Km/min");
    
    }
    