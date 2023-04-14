let categoria = Number(prompt(`Ingrese la categoría de animal que desea estudiar: 
1 -> Para elefantes
2 -> Para jirafas
3 -> Para chimpances`));
let contador1=0;
let contador2=0;
let contador3=0;


while (isNaN(categoria) || (categoria == 1 && categoria == 2 && categoria == 3)) {
    categoria=Number(prompt(`Dato inválido. Ingrese nuevamente la categoría de animal que desea estudiar: 
    1 -> Para elefantes
    2 -> Para jirafas
    3 -> Para chimpances`))
}
let edad=0;
switch (categoria){
    case 1:
    for (let i=0; i<=20;i++){
        edad=Number(prompt(`Ingrese la categoria de edad en la que se encuentra el elefante #${i}
        1: de 0 a 1 año
        2: 1 año y menos de 3
        3: 3 o mas años`));
        while (isNaN(edad)|| (edad!=1 && edad !=2 && edad!=3)){
            edad= Number(prompt(`Error. Ingrese la categoria de edad en la que se encuentra el elefante #${i}
            1: de 0 a 1 año
            2: 1 año y menos de 3
            3: 3 o mas años`));
        }
    }
}


alert(`hola ${categoria}
hola`);