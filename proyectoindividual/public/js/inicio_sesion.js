const botonIniciarSesion = document.querySelector('#iniciarSesion');
const inputNombreUsuario = document.querySelector('#nombreUsuario');
const inputContraseña = document.querySelector('#contraseña');

botonIniciarSesion.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    let usuario = inputNombreUsuario.value;
    let contraseña = inputContraseña.value;
   

    let estadoError = validar(usuario, contraseña);

    if (estadoError == false) {
        swal({ 
            title: "Hoot-hoot!",
            text: "Datos Correctos",
            type: "success"}).then(okay => {
   if (okay) {
    window.location = "reservas.html";
  }
});

        
    } else {
        swal({
            type: 'warning',
            title: 'Datos incorrectos',
            text: 'El mensaje no pudo ser enviado, revise los campos en rojo'
        });
    }

};
function validar(pIdentidad, pContraseña) {
    let error = false;
    let expCorreo = /^.+@.+\..+$/;

    // Identidad
    if (pIdentidad == '' || pIdentidad.length == 0) {
        inputIdentificacion.classList.add('errorInput');
        error = true;
    } else {
        inputIdentificacion.classList.remove('errorInput');
    }

    // contraseña
    if (pContraseña == '' || pContraseña.length == 0) {
        inputContraseña.classList.add('errorInput');
        error = true;
    } else {
        inputContraseña.classList.remove('errorInput');
    }

    return error;
};