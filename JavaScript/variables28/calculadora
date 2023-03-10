def csuma (a,b):
    result = a + b
    return result

def cresta (a,b):
    result = print("El resultado de la resta es igual a ",str(a-b))

def cmultiplica(a,b):
    result = print("El resultado de la multiplicación es igual a ",str(a*b))

def cdivide(a,b):
    result = print("El resultado de la división es igual a ",str(a/b))

j=1
while j==1:
    operacion = int(input("¿Que operación deseas realizar"
                        "\n Oprima:"
                        "\n 1. Suma"
                        "\n 2. Resta"
                        "\n 3. Multiplicación"
                        "\n 4. División"
                        "\n "))
    a = int(input("Escriba el primer número "))
    b = int(input("Escriba el segundo número "))

    match operacion:
        case 1:
            print("El resultado de la suma es: ",str(csuma(a,b)))
        
        case 2:
            cresta (a,b)

        case 3:
            cmultiplica (a,b)

        case 4:
            cdivide (a,b)
        
        case _:
            print("Digite una opción valida")
    print("\n ")
    print("¿Desea realizar otra tabla de multiplicar?")
    print(" 1. Para realizar")
    print(" 0. Para salir")
    j=int(input("Digite su opción  "))
