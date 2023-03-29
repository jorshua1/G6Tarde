/*crear 3 Arrays, 2 Objetos, 2 Objetos dentro de otros objetos*/

let vFrutas = ["fresa","banana","mango","manzana"];
let vNumeroos = [1,2,3,4,5,6,7,8,9];
let vAmbos = ["nombre","apellido","edad","altura",1,2,3,4,5,];
//--------------------------------------------------------------------------
var vCelular = {
    marca:"Samsumg",
    color:"Azul"
}

var vZapatos = {
    talla:21,
    tipo:"tela"
}
//-------------------------------------------------------------------------------------------
let vFamilia = {
    familia1:"papa",
    familia2: {
        parentesco:"mama",
        parentesco:"hija",
        parentesco:"hijo"
    }
}
console.log(vFamilia);
//-----------------------------------------------------------------------------
let vCubica = []
let vNumeros = [1,2,3,4,5,6,7,8,9];
for (let vI = 0; vI < vNumeros.length; vI++) {
    vCubica [vI] = vNumeros [vI] ** 3
    console.log(vCubica); 
}
//-----------------------------------------------------------------------
let vNumero = []
for (let vI = 0; vI < 10; vI++) {
    let vIngresar = prompt("Ingrese un numero");
    vNumero [vI] = vIngresar;
    console.log(vIngresar);
}


