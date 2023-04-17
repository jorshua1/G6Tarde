function validador(){
    let num=Number(prompt("Ingrese un numero"))
    while(isNaN(num)){
        alert("ingrese un numero valido")
        num=Number(prompt("Ingrese un numero"))
    }
    if(num>1){
    for (let i=1;i<=num;i++){
        if(i===3){
            console.log("Fizz")
        }else if(i===5){
        console.log("Buzz")
        }else if(i!==3 && i!==5){
            console.log(i)
        }
    }
    }else{
        for (let j=1;j>=num;j--){
            if(j===3){
                console.log("Fizz")
            }else if(j===5){
            console.log("Buzz")
            }else if(j!==3 && j!==5){
                console.log(j)
            }
        }
    }
}
(validador());

