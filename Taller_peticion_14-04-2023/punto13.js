function contar(variable){
    if (variable > 0){
        for (var i = 1; i <= variable; i++){
            console.log(i);
        }
    }else{
        for (var i = 1; i >= variable; i--){
        console.log(i);
    }
}
}
let variable = parseInt(prompt("por favor ingresar un numero"));
console.log(contar(variable));