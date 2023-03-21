from FuncionesAritmeticas import *
from libreirabasica import mostrarmensaje, digitarmensaje
opcion = 0
while opcion != 5:
      opcion = int(input("Digite la operacion que desea realizar: "
               "\n 1. Para realizar una suma."
               "\n 2. Para realizar una resta."
               "\n 3. PAra realizar una multiplicacion."
               "\n 4. Para realizar una division."
               "\n 5. Para salir."       
               "\n : "))
      
      #num1 = int(input("Digite el primer numero: "))  
      num1 = digitarmensaje() 
      num2 = int(input("Digite el segundo numero: "))

      match opcion:
            case 1:
                  mostrarmensaje(sumar(num1, num2))
                  
            case 2:
                  #print(f"El resultado de la resta es: {restar(num1, num2)}")    
                  mostrarmensaje(restar(num1, num2))
            case 3:
                  #print(f"El resultado de la Multiplicacion es: {Multiplicar(num1, num2)}")      
                  mostrarmensaje(Multiplicar(num1, num2))
            case 4:
                  #print(f"El resultado de la division es: {Dividir(num1, num2)}")
                  mostrarmensaje(Dividir(num1, num2))
            case _:
                  print("Dato invalido")



