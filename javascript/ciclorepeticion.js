
//while
num= 1

while (num<=10){
    console.log("su numero es "+num)
    num=num+1

    //tambien sirve: num++ (me permite incrementar de uno en uno)
}
 i=parseInt(prompt("porfavor dijite el numero para hacerle la tabla"))
while (isNaN(i)) {
    i=parseInt(prompt("porfavor dijite el numero para hacerle la tabla"))
}


//brak para romper ciclos
console.log("fin del ciclo")

    num= 1

    while (true){
        console.log("su numero es "+num)
        num=num+1
    break;
        //tambien sirve: num++ (me permite incrementar de uno en uno)
    }

    console.log("fin del ciclo")


    //do while
num=0
    do{
        alert(num);

        num++
    }while(num<=10){

        console.log("su numero es "+num)

    }



    //tablas de multiplicar

    num=parseInt(prompt("porfavor dijite el numero para hacerle la tabla"))

    if(num<0 || isNaN(num)){
        console.log("porfavor dijite numeros positivos y no letras")
    }else{
        
    i=0

    while(i <= 10){

       tabla=i*num
      

       console.log(num+"*"+i+"="+tabla)
       i++
    }
    }
    
//for

for (let i = 0; i <= 10; i++) {
    console.log("lul"+i) 
}

//// con += defino los pasos
for (let i = 0; i <= 100; i+=50) {
    console.log("lul"+i) 
}

//// ejercicio de las trablas co for y validando con while
let num
num=parseInt(prompt("porfavor dijite el numero para hacerle la tabla"))
while (isNaN(num)) {
    num=parseInt(prompt("porfavor dijite el numero para hacerle la tabla"))
}

for (i = 0; i <= 10; i++) {

    tabla=i*num
    console.log(num+"*"+i+"="+tabla)
    
}




