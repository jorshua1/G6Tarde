let uwu =+(prompt("Enter a number"));
while (isNaN(uwu) || uwu === "" || uwu === null) {
    uwu =+ (prompt("Enter a valid number"));
}
let x = 1;
let añañay;
do {
    añañay = uwu * x;
    x++;
    alert(añañay);
} while (x <= 10);

// otra forma de hacerlo
let upa = "wepale"
while (upa === "wepale") {
    let x = 1;
    let uwu = Number(prompt("ingrese un numero gonorreita"));
    if (isNaN(uwu) || uwu === "" || uwu === null || uwu <= 0)
        alert("ingrese algo valido pirobo")
    else {
        while (x <= 10) {
            let añañay = uwu * x;
            x++;
            alert(añañay);

        }
        let jueputa = Number(prompt("para agregar otro numero escriba 1"));
        if (jueputa === 1) {

        } else (
            upa = "cha loca"
        )
    }

}

//mismo ejercicio culo con el for

let i = 0
let uwu =+ (prompt("ingrese un numero"));
while (isNaN(uwu) || uwu === "" || uwu === null || uwu <= 0) {
    uwu=+ (prompt("ingrese algo valido pirobo"));
}
for (i = 0; i < 10; i++) {
    let añañay = uwu * i;
    alert(añañay);
}

//los =+ tambien son parse int o hace referencia al que la variable es un entero

let num=10
if(num<=10){
    let num="15"
}
console.log(num)