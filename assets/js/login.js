function validarInicioSesiom() {
    let usuario = document.getElementById("user").value;
    let contrasena = document.getElementById("password").value;
    let mensajeError = document.getElementById("mensajeError");

    mensajeError.innerHTML = "";


    if (usuario.trim() === "") {
        mensajeError.innerHTML += "Por favor, ingrese su nombre de usuario.<br>";
    }

    if (contrasena.trim() === "") {
        mensajeError.innerHTML += "Por favor, ingrese su contraseña.<br>";
    }

    if (mensajeError.innerHTML !== "") {
        return false; 
    } return true;

}