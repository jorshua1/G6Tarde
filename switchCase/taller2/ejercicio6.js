alert("Ingrese nota de 1 a 5");
let previo1=Number(prompt("Ingrese la nota del previo 1"));
if (previo1<=0 || previo1>5|| isNaN(previo1)){
    alert("Ingrese un valor correcto");
}else{
    let previo2=Number(prompt("Ingrese la nota del previo 2: "));
    if (previo2<=0 ||previo2>5 || isNaN(previo2)){
        alert("Ingrese un valor correcto")
    }else{
        let previo3=Number(prompt("Ingrese la nota del previo 3 "));
        if (previo3<=0|| previo3>5|| isNaN(previo3)){
            alert("Ingrese un valor correcto")
        }else{
            let trabajo1 =Number(prompt("Ingrese la nota del trabajo 1"));
            if (trabajo1<=0 || trabajo1 >5 || isNaN(trabajo1)){
                alert("Ingrese un valor correcto")
            }else{
                let trabajo2 =Number(prompt("Ingrese la nota del trabajo 2"));
                if(trabajo2<=0 || trabajo2>5 || isNaN(trabajo2)){
                    alert("Ingrese un valor correcto")
                }else{
                    let notaFinal=((((previo1+previo2+previo3)/3)*0.6)+((trabajo1+trabajo2)/2)*0.4);
                    alert("Su nota final es: "+notaFinal);
                }
            }
        }
    }
}