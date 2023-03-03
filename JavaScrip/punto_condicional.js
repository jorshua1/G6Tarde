let vista = "en la tienda de helados tenemos: /n
            "; 
let presu = number(prompt(""));
		let precio = 0.00;
		let helado = 1.90;
		let precioFinal = 0.00;

		if(presu=="oreo"){
			precio = 1;
		}else if(presu == "kitkat"){
			precio = 1.50;
		}else if(presu == "brownie"){
			precio = 0.75;
		}else  if(presu == "lacasitos"){
			precio = 0.95;
		}else{
			document.write("no tenemos este topping, lo sentimos. ");
			precio = 0;
		}

		precioFinal = helado + precio;
		document.write("el helado cuesta " + precioFinal + " €");
