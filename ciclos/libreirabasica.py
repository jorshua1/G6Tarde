import tkinter as tk

def mostrarmensaje(mensaje):
    root = tk.Tk()

    message = tk.Label(root, text = (f"El resultado de la operacion es: {mensaje}") )
    message.pack()

    root.mainloop()

def digitarmensaje():

    entry = tk.Entry()    

    