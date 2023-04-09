/*Evaluar las siguientes expresiones A=2, B=5, C=1:
I. 3*A-4*B/A**2 */

let A = 2;
let B = 5;
let C = 1;

ecuacion1 = ((3 * A) - (4 * B)) / A ** 2;
ecuacion2 = 3 * A - 4 * B / A ** 2;

console.log("El resultado de la ecuacion, ((3*A)-(4*B))/A**2, es :" + ecuacion1);
console.log("El resultado de la ecuacion, 3*A-4*B/A**2, es :" + ecuacion2);
console.log(`
El resultado de la ecuacion:
((3*A)-(4*B))/A**2
es :${ecuacion1}`);
console.log(`
El resultado de la ecuacion:
3*A-4*B/A**2
es :${ecuacion2}`);

/*II. (((B+C)/2*A+10)*3*B)-6 */

ecuacion3 = (((B + C) / 2 * A + 10) * 3 * B) - 6;
ecuacion4 = B + C / 2 * A + 10 * 3 * B - 6;

console.log("El resultado de la ecuacion, (((B+C)/2*A+10)*3*B)-6, es :" + ecuacion3);
console.log("El resultado de la ecuacion, B+C/2*A+10*3*B-6, es :" + ecuacion4);
console.log(`
El resultado de la ecuacion:
(((B+C)/2*A+10)*3*B)-6
es :${ecuacion3}`);
console.log(`
El resultado de la ecuacion:
B+C/2*A+10*3*B-6
es :${ecuacion4}`);