let Not1 = parseFloat(prompt("Ingrese su primer nota del 40%(decimales)"));
let Not2 = parseFloat(prompt("Ingrese su segunda nota del 40%(decimales)"));
let Not3 = parseFloat(prompt("Ingrese su primer nota del 60%(decimales)"));
let Not4 = parseFloat(prompt("Ingrese su segunda nota del 60%(decimales)"));
let PorcNot12 = ((Not1 + Not2) * 0.4);
let PorcNot34 = ((Not3 + Not4) * 0.6);
let Total = (PorcNot12 + PorcNot34)/2;
console.log(Total)