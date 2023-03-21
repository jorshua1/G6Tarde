let numero = Number(prompt("Ingrese un numero"));
let numero2 = Number(prompt("Ingrese otro numero"));
let booleano = prompt("¿desea realizar la suma?");
let sumaTotal = 0
while(booleano == "si"){
    let suma=numero+numero2
    sumaTotal=sumaTotal+suma
    alert("Suma = "+sumaTotal)
    let booleano = prompt("¿desea realizar la suma?")
    if(booleano == "no"){
        alert("Suma = "+sumaTotal)
        break
    }
}
