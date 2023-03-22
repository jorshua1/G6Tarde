from math import pi

def areacirculo():
    r =int(input("ingrese el radio del circulo"))
    print(f"el area del circulo es:{pi*r**2}")


def perimetrocuadrado():
    num=int(input("ingrese la longitud del lado"))
    print(f"el perimetro del cuadrado es: {num*4}")


def areacuadrado():
    num=int(input("ingrese la longitud dellado"))
    print(f"el perimetro del cuadrado es: {num**2}")


def perimetrocirculo():
    r =int(input("ingrese el radio del circulo"))
    print(f"el perimetro del circulo es:{2*pi*r}")


opciones = 0
while opciones!=5:
    opciones = int(input("ingresela opcion que desea realizar"
        "\n1.para calcular el area del circulo"
        "\n2.para calcular el perimetro del cuadrado"
        "\n3.para calcular el area del cuadrado"
        "\n4.para calcular el perimetro del circulo"
        "\n5:para salir"
        "\n"))
    
    match opciones:

        case 1:
            areacirculo()

        case 2:
            perimetrocuadrado()

        case 3:
            areacuadrado()

        case 4:
            perimetrocirculo()
         
              
              
              
  
    


   


