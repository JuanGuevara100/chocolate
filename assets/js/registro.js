let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let password= document.getElementById("password").value;
let confirm_password= document.getElementById("confirm-password").value;
let telefono = document.getElementById("tel").value;

function validarFormulario() {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "";}

if (nombre.trim() === "") {
    mensajeError.innerHTML += "Por favor, ingrese su nombre.<br>";
}

if (email.trim() === "" || !validateEmail(email)) {
    mensajeError.innerHTML += "Por favor, ingrese un correo electrónico válido.<br>";
}

if (password.trim() === "") {
    mensajeError.innerHTML += "Por favor, ingrese una contraseña.<br>";
}

if (password !== confirmPassword) {
    mensajeError.innerHTML += "Las contraseñas no coinciden.<br>";
}

if (tel.trim() === "" || !/^\d{10}$/.test(tel)) {
    mensajeError.innerHTML += "Por favor, ingrese un número de contacto válido (10 dígitos).<br>";
}

if (mensajeError.innerHTML !== "") {
    return false; // Evita el envío del formulario si hay mensajes de error
}

return true;


function validateEmail(email) {
// Expresión regular para validar un correo electrónico
var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
return emailRegex.test(email);
}


