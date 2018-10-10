const botonRegistrar = document.querySelector('#boton_registrar');
const inputCodigo = document.querySelector('#codigoEditorial');
const inputNombre = document.querySelector('#nombreSucursal');
const inputNumero = document.querySelector('#numero');
const inputDireccion = document.querySelector('#direccionSucursal');

botonRegistrar.addEventListener('click', obtenerDatos);



function obtenerDatos() {
    let codigo = inputCodigo.value;
    let nombre = inputNombre.value;
    let numero = inputNumero.value;
    let direccion = inputDireccion.value;
    
    let estadoError = validar(codigo, nombre, numero, direccion);

    if (estadoError == false) {
        swal({
            type: 'success',
            title: 'Mensaje enviado',
            text: 'Le responderemos tan pronto como sea posible'
        }); 
    } else {
        swal({
            type: 'warning',
            title: 'Datos incorrectos',
            text: 'El mensaje no pudo ser enviado, revise los campos en rojo'
        });
    }
};

function validar(pCodigo, pNombre, pNumero, pDireccion) {
    let error = false;
    let expSoloNumeros = /^\d+$/;
    let expNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;
    let minDireccionLength = 15;
    let maxDireccionLength = 250;

    // Codigo
    if (expSoloNumeros.test(pCodigo) == false) {
        inputCodigo.classList.add('errorInput');
        error = true;
    } else {
        inputCodigo.classList.remove('errorInput');
    }

    // Nombre
    if (expNombre.test(pNombre) == false) {
        inputNombre.classList.add('errorInput');
        error = true;
    } else {
        inputNombre.classList.remove('errorInput');
    }

    // Numero
    if (expSoloNumeros.test(pNumero) == false) {
        inputNumero.classList.add('errorInput');
        error = true;
    } else {
        inputNumero.classList.remove('errorInput');
    }

    // Numero
    if (pDireccion.length < minDireccionLength || pDireccion.length > maxDireccionLength) {
        inputDireccion.classList.add('errorInput');
        error = true;
    } else {
        inputDireccion.classList.remove('errorInput');
    }

    return error;
};

