let quantitySamsung = 0;
let quantityIphone = 0;
let quantityXiaomy = 0;
let quantityHuawei = 0;
let quantityMotorola = 0;
let quantityOppo = 0;

let option = 0;
let optionSubMenu = 0;
let quantity = 0;

while (option !== 5) {
  option = parseInt(prompt(`Select an option from the menu:
  
  1. Enter data into the inventory.
  2. View inventory.
  3. Make a sale.
  4. View money raised.
  5. Exit the program.`)
  );

  while (isNaN(option) || option <= 0 || option > 6) {
    option = parseInt(prompt(`¡¡¡PLEASE ENTER THE VALUES CORRECTLY!!!
  
      1. Enter data into the inventory.
      2. View inventory
      3. Make a sale.
      4. View money raised.
      5. Exit the program.`)
    );
  }
  alert(option);

  switch (option) {
    case 1:
      optionSubMenu = 0;
      while (optionSubMenu !== 7) {
        optionSubMenu = parseInt(prompt(`Please enter the cell phone brand you want to enter stocks:
        
        1. Samsung.
        2. Iphone.
        3. Xiaomy.
        4. Huawei.
        5. Motorola.
        6. Oppo.
        7. Do not check in and out`)
        );

        while (isNaN(optionSubMenu) || optionSubMenu <= 0 || optionSubMenu > 8) {
          optionSubMenu = parseInt(prompt(`¡Please enter the cell phone brand you want to enter stocks:
        
        1. Samsung.
        2. Iphone.
        3. Xiaomy.
        4. Huawei.
        5. Motorola.
        6. Oppo.
        7. Do not check in and out`)
          );
        }

        switch (optionSubMenu) {
          case 1:
            quantity = parseInt(prompt(`Please enter the number of Samsung phones you wish to add: 
              There are currently ${quantitySamsung} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(prompt(`Please enter the number of Samsung phones you wish to add: 
                There are currently ${quantitySamsung} units of this brand.`)
              );
            }
            quantitySamsung += quantity;
            break;

          case 2:
            quantity = parseInt(prompt(`Please enter the number of Iphone phones you wish to add: 

        There are currently ${quantityIphone} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(prompt(`Please enter the number of Iphone phones you wish to add: 
            
            There are currently ${quantityIphone} units of this brand.`)
              );
            }
            quantityIphone += quantity;
            break;

          case 3:
            quantity = parseInt(
              prompt(`Please enter the number of Xiaomy phones you wish to add: 

        There are currently ${quantityXiaomy} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Xiaomy phones you wish to add: 
            
            There are currently ${quantityXiaomy} units of this brand.`)
              );
            }
            quantityXiaomy += quantity;
            break;

          case 4:
            quantity = parseInt(
              prompt(`Please enter the number of Huawei phones you wish to add: 

        There are currently ${quantityHuawei} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Huawei phones you wish to add: 
            
            There are currently ${quantityHuawei} units of this brand.`)
              );
            }
            quantityHuawei += quantity;
            break;

          case 5:
            quantity = parseInt(
              prompt(`Please enter the number of Motorola phones you wish to add: 

        There are currently ${quantityMotorola} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Motorola phones you wish to add: 
            
            There are currently ${quantityMotorola} units of this brand.`)
              );
            }
            quantityMotorola += quantity;
            break;

          case 6:
            quantity = parseInt(
              prompt(`Please enter the number of SOppo phones you wish to add: 

        There are currently ${quantityOppo} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Oppo phones you wish to add: 
            
            There are currently ${quantityOppo} units of this brand.`)
              );
            }
            quantityOppo += quantity;
            break;

          case 7:
            alert("Volviendo al menu anterior");
            break;
          default:
            alert("Ingrese un valor valido");
            break;
        }
      }
      break;

    case 2:
      alert(`El inventario cuenta con las siguientes cantidades:
        
        Material   Cantidad
        Samsung:  ${quantitySamsung}
        Iphone:   ${quantityIphone}
        Xiaomy:   ${quantityXiaomy}
        Huawei:   ${quantityHuawei}
        Motorola: ${quantityMotorola}
        Oppo:     ${quantityOppo}`);
      break;

    case 3:
      optionSubMenu = 0;
      while (optionSubMenu !== 7) {
        optionSubMenu = parseInt(
          prompt(`Please enter the cell phone brand you want to sell:
        
        1. Samsung.
        2. Iphone.
        3. Xiaomy.
        4. Huawei.
        5. Motorola.
        6. Oppo.
        7. Do not check in and out`)
        );

        while (
          isNaN(optionSubMenu) || optionSubMenu <= 0 || optionSubMenu > 8) {
          optionSubMenu = parseInt(
            prompt(`¡Please enter the cell phone brand you want to sell:
        
        1. Samsung.
        2. Iphone.
        3. Xiaomy.
        4. Huawei.
        5. Motorola.
        6. Oppo.
        7. Do not check in and out`)
          );
        }
        switch (optionSubMenu) {
          case 1:
            if (quantitySamsung) {
              quantity = parseInt(prompt(`Please enter the number of Samsung phones you wish to sell:
              
              There are currently ${quantitySamsung} units of this brand.`));
              while (isNaN(quantity) || quantity <= 0) {
                quantity = parseInt(prompt(`
                Please enter the number of Samsung phones you wish to sell:
                
                There are currently ${quantitySamsung} units of this brand.`));
              }
              quantitySamsung -= quantity;
            } else {
              alert("There are not currently units of this brand.");
            }
            break;

          case 2:
            if (quantityIphone) {
              quantity = parseInt(prompt(`Please enter the number of Iphone phones you wish to sell:
              
              There are currently ${quantityIphone} units of this brand.`));
              while (isNaN(quantity) || quantity <= 0) {
                quantity = parseInt(prompt(`
                Please enter the number of Iphone phones you wish to sell:
                
                There are currently ${quantityIphone} units of this brand.`));
              }
              quantityIphone -= quantity;
            } else {
              alert("There are not currently units of this brand."); s
            }
            break;

          case 3:
            quantity = parseInt(
              prompt(`Please enter the number of Xiaomy phones you wish to sell: 
  
          There are currently ${quantityXiaomy} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Xiaomy phones you wish to sell
: 
              
              There are currently ${quantityXiaomy} units of this brand.`)
              );
            }
            quantityXiaomy += quantity;
            break;

          case 4:
            quantity = parseInt(
              prompt(`Please enter the number of Huawei phones you wish to sell: 
  
          There are currently ${quantityHuawei} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Huawei phones you wish to sell
: 
              
              There are currently ${quantityHuawei} units of this brand.`)
              );
            }
            quantityHuawei += quantity;
            break;

          case 5:
            quantity = parseInt(
              prompt(`Please enter the number of Motorola phones you wish to sell: 
  
          There are currently ${quantityMotorola} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Motorola phones you wish to sell
: 
              
              There are currently ${quantityMotorola} units of this brand.`)
              );
            }
            quantityMotorola += quantity;
            break;

          case 6:
            quantity = parseInt(
              prompt(`Please enter the number of SOppo phones you wish to sell: 
  
          There are currently ${quantityOppo} units of this brand.`)
            );
            while (isNaN(quantity) || quantity <= 0) {
              quantity = parseInt(
                prompt(`Please enter the number of Oppo phones you wish to sell
: 
              
              There are currently ${quantityOppo} units of this brand.`)
              );
            }
            quantityOppo += quantity;
            break;

          case 7:
            alert("Volviendo al menu anterior");
            break;
          default:
            alert("Ingrese un valor valido");
            break;
        }
      }
      break;
  }
}
