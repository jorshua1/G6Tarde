let a="";
let b=0;
let frutas = ["Manzana", "Banana","pera","platano","mandarina"];
let mixto=["hola",254,4.5,true,a,false,null,undefined];



var micarrito= {
    marca: 'Ford',
    modelo: 'Mustang',
    año: 1969
};



var ob1={
    ob2:{
        ob3:{
            ob4:{
                ob5:{
                    nombre:"Daniel"
                }
            }
        }
    }
}
console.log(ob1.ob2.ob3.ob4.ob5.nombre);

var colegio={
    estudiantes:{
        primaria: h=["mateo","zariela","Brayan"]

    }
}
console.log(colegio.estudiantes.primaria[2]);


let numeros = [1,2,3,4,5,6,7,8,9];
let cubico=[]
for (let i=0;i<numeros.length;i++){
    cubico[i]=[numeros[i]**3]
}
console.log(cubico);