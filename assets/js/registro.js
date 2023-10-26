function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let tel = document.getElementById("tel").value;
    let mensajeErrorNombre = document.getElementById("mensajeErrorNombre");
    let mensajeErrorEmail = document.getElementById("mensajeErrorEmail");
    let mensajeErrorPassword = document.getElementById("mensajeErrorPassword");
    let mensajeErrorConfPass = document.getElementById("mensajeErrorConfPass");
    let mensajeErrorTel = document.getElementById("mensajeErrorTel");
    

    if (nombre.trim() === "") {
        mensajeErrorNombre.innerHTML += "Por favor, ingrese su nombre.<br>";
    }

    if (email.trim() === "" || !validateEmail(email)) {
        mensajeErrorEmail.innerHTML += "Por favor, ingrese un correo electrónico válido.<br>";
    }

    if (password.trim() === "") {
        mensajeErrorPassword.innerHTML += "Por favor, ingrese una contraseña.<br>";
    }

    if (password !== confirmPassword) {
        mensajeErrorConfPass.innerHTML += "Las contraseñas no coinciden.<br>";
    }

    if (tel.trim() === "" || !/^\d{10}$/.test(tel)) {
        mensajeErrorTel.innerHTML += "Por favor, ingrese un número de contacto válido (10 dígitos).<br>";
    }

    if ((mensajeErrorNombre.innerHTML|| mensajeErrorEmail||mensajeErrorPassword||mensajeErrorTel) !== "") {
        return false; 
    }

    return true;
}

function validateEmail(email) {
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}


