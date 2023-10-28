function validarInicioSesion() {
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('password').value;

    var mensajeErrorUsuario = document.getElementById('mensajeErrorUsuario');
    var mensajeErrorContraseña = document.getElementById('mensajeErrorContraseña');

    mensajeErrorUsuario.textContent = '';
    mensajeErrorContraseña.textContent = '';

    if (usuario.trim() === "") {
        mensajeErrorUsuario.innerHTML = 'El campo de usuario no puede estar vacío';
        return false; 
    }

    if (contraseña.trim() === "") {
        mensajeErrorContraseña.innerHTML = 'El campo de contraseña no puede estar vacío';
        return false; 
    }

    if ((mensajeErrorUsuario.innerHTML|| mensajeErrorContraseña.innerHTML) !== "") {
        return false; 
    }

    return true;

}
