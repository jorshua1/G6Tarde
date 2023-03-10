let ex1 = Number(prompt("ingrese la nota del examen 1"));
 if (ex1 >=0 && ex1<=5.0){
    let ex2 = Number(prompt("ingrese la nota del examen 2"));
    if (ex2 >=0 && ex2<=5.0){
        let ex3 = Number(prompt("ingrese la nota del examen 3"));
        if (ex2 >=0 && ex2<=5.0){
            let ex3 = Number(prompt("ingrese la nota del examen 3"));
            if (ex3 >=0 && ex3<=5.0){
                let t1 = Number(prompt("ingrese la nota del trabajo 1"));
                if (t1 >=0 && t1<=5.0){
                    let t2 = Number(prompt("ingrese la nota del trabajo 2"));
                    if (t2 >=0 && t2<=5.0){
                        let exf = Number(prompt("ingrese la nota del examen final"));
                        if (exf >=0 && exf<=5.0){
                            let aut = Number(prompt("ingrese la nota de autoevaluacion"));
                            if (aut >=0 && aut<=5.0){
                                let coe = Number(prompt("ingrese la nota de coevaluacion"));
                                let definitiva = (((ex1+ex2+ex3)/3)*0.55)+(((t1+t2)/2)*0.15)+(exf*0.2)+(((aut+coe)/2)*0.1);                                
                                    if (definitiva<=5.0 && definitiva >= 4.7 ){
                                        alert("el estudiante ha APROBADO con una nota de "+definitiva+ " dejandolo en un nivel SUPERIOR");
                                    }else if (definitiva<4.7 && definitiva >= 4.0 ){
                                        alert("el estudiante ha APROBADO con una nota de "+definitiva+" dejandolo en un nivel ALTO");
                                    } else if (definitiva<4.0 && definitiva >= 3.0 ){
                                        alert("el estudiante ha APROBADO con una nota de "+definitiva+" dejandolo en un nivel BÁSICO");
                                    } else if (definitiva<3.0 && definitiva >= 2.0 ){
                                        alert("el estudiante ha REPROBADO con una nota de "+definitiva+" dejandolo en un nivel BAJO");
                                    } else if (definitiva<2.0 && definitiva >= 0 ){
                                        alert("el estudiante ha REPROBADO con una nota de "+definitiva+" dejandolo en un nivel MUY BAJO");
                                    }
}else{
    alert ("ingrese una nota válida");
}}else{
    alert ("ingrese una nota válida");
} }else{
    alert ("ingrese una nota válida");
} }else{
    alert ("ingrese una nota válida");
} }else{
    alert ("ingrese una nota válida");
}}else{
    alert ("ingrese una nota válida");
}}else{
    alert ("ingrese una nota válida");
}}else{
    alert ("ingrese una nota válida");
} 

