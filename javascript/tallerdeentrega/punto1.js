let num=Number(prompt("ingrese un numero del uno al 10"));
if(num>10 || num<=0 || isNaN(num)){
     console.log("valor invalido")
}
else{
    let num1=Number(prompt("ingrese otro numero del 1 al 10"));
    if(num1>10 || num1<=0 || isNaN(num1)){
        console.log("valor invalido")
    };
    if(!isNaN(num || num1)){
        if(num>num1){
            console.log(num1,num)
        }
        else if(num1>num){
            console.log(num,num1)
        }
        else{
            console.log("son iguales")
        }
    }
}


