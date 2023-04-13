/*9Ejercicio 14Permalink
Crear un programa que lea los precios de 5 artículos y 
las cantidades vendidas por una empresa en sus 4 sucursales. Informar:

Las cantidades totales de cada articulo.
La cantidad de artículos en la sucursal 2.
La cantidad del articulo 3 en la sucursal 1.
La recaudación total de cada sucursal.
La recaudación total de la empresa.
La sucursal de mayor recaudación.*/

let PrimeraSucursal=[];
let SegundaSucursal=[];
let TerceraSucursal=[];
let CuartaSucursal=[];
let menuprincipal=0;
let menupararegistar=0;
let menuparaprecios=0;
let menudeverinventario
while(menuprincipal!=7){
    menuprincipal=Number(prompt("bienvenido \n elige una de las siguientes opciones\n 1.registar inventario\n 2.asignar precios a los productos\n 3.registrar ventas\n 4.ver inventario y precios\n 5.ver el dinero recaudado\n 6.ver sucursal con mayor recaudacion\n 7.salir"));
    while(menuprincipal<0||isNaN(menuprincipal)|| menuprincipal>7){
        alert("dato invalido");
        menuprincipal=Number(prompt("bienvenido \n elige una de las siguientes opciones\n 1.registar inventario\n 2.asignar precios a los productos\n 3.registrar ventas\n 4.ver inventario y precios\n 5.ver el dinero recaudado\n 6.ver sucursal con mayor recaudacion\n 7.salir"));

    }
    switch(menuprincipal){
        case 1:
            menupararegistar=Number(prompt("porfavor seleccione una sucursal\n 1.primera sucursal\n2.segunda sucursal\n3.tercera sucursal\n 4.cuarta sucursal"));
            while(menupararegistar<0 || isNaN(menupararegistar) || menupararegistar>4){
                alert("valor invalido")
                menupararegistar=Number(prompt("porfavor seleccione una sucursal\n 1.primera sucursal\n2.segunda sucursal\n3.tercera sucursal\n 4.cuarta sucursal"));
                }
            switch(menupararegistar){
                case 1:
                    for(let a=0; i<5;a++){
                        PrimeraSucursal[a]=[];
                    for(let i=0;i<2;i++){
                        PrimeraSucursal[i][a]=Number(prompt(""))
                    }
                }
            }
}
}