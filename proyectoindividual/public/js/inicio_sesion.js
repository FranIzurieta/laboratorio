const botonIniciarSesion = document.querySelector('#iniciarSesion');
const inputNombreUsuario = document.querySelector('#nombreUsuario');
const inputContraseña = document.querySelector('#contraseña');

botonIniciarSesion.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    let usuario = inputNombreUsuario.value;
    let contraseña = inputContraseña.value;
   

    let estadoError = validar(usuario, contraseña);

    if (estadoError == false) {

        if (contraseñasParejas(contraseña, contraseñaConfirmacion)){
            swal({
                type: 'success',
                title: 'Mensaje enviado',
                text: 'Le responderemos tan pronto como sea posible'
            });    
        } else{
            
            swal({
                type: 'warning',
                title: 'Datos incorrectos',
                text: 'Sus contraseñas no son parejas!'
            });    
        }
    } else {
        swal({
            type: 'warning',
            title: 'Datos incorrectos',
            text: 'El mensaje no pudo ser enviado, revise los campos en rojo'
        });
    }

};