function login() {
    var user, password;

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if (user == "felipe" && password == "1234") {
        window.location="./inventario.html"
    } else {
        alert(`Datos incorrectos`)
    }
}