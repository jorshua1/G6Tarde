let vNumber01 = 1;
while (vNumber01 <= 0) {
    console.log(vNumber01);
    vNumber01++
}
console.log("XD");

//---------------------------------------------------
let vNumber02 = 1;
while (true) {
    console.log("Hola");
    break;
} console.log("XD");
//==============================================================================0
let vNumber03 = 0;
do {
    alert(vNumber03);
    vNumber03++
} while (vNumber03 <= 10);
console.log("XD");
//===================================================================================
let vNumberX = parseInt(prompt("Ingrese el numero a multiplicar"));
while (isNaN(vNumberX) || vNumberX < 0) {
    vNumberX = parseInt(prompt("Ingrese un numero valido"))
}
let vNumberMas = 0;
while (vNumberMas <= 10) {
    let vNumberMulti = vNumberMas * vNumberX;
    console.log(vNumberMulti);
    vNumberMas++
}
//================================================================================================
let vNumberXx = parseInt(prompt("Ingrese el numero a multiplicar"));
if (isNaN(vNumberXx) || vNumberXx < 0) {
    vNumberXx = parseInt(prompt("Ingrese un numero valido"))
}else {     
    let vNumberMass = 0;
    while (vNumberMass <= 10) {
    let vNumberMultii = vNumberMass * vNumberXx;
    console.log(vNumberMultii);
    vNumberMass++
    alert(vNumberMultii);
    }
}
//==============================================================================================
let vNumberA = parseInt(prompt("Ingrese un numero"));

while (isNaN(vNumberA) || vNumberA < 0) {   
    vNumberA = parseInt(prompt("Ingrese un numero valido"));
}
for (let vI = 0; vI <= 10; vI++) {
    let vMul = vNumberA * vI;     
    alert(vMul);
}

console.log("Ingrese un dato valido");
console.log(vMul);  
//==========================================================================================
let tabla = 1;
let resultado = "";
while (tabla <= 10) {
  let i = 1;
  let multiplicacion = "";
  while (i <= 10) {
    multiplicacion += `${tabla} x ${i} = ${tabla*i}\n`;
    i++;
  }
  resultado += multiplicacion + "\n";
  tabla++;
}


