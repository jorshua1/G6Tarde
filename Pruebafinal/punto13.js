function validador(){
    let num=Number(prompt("Ingrese un numero"))
    while(isNaN(num)){
        alert("ingrese un numero valido")
        num=Number(prompt("Ingrese un numero"))
    }
    if(num>1){
    for (let i=1;i<=num;i++){
        console.log(i)
    }
    }else{
        for (let j=1;j>=num;j--){
            console.log(j)
        }
    }
     
}
(validador());