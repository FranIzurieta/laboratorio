

const botonRegistrar = document.querySelector('#botonRegistrar');
const inputIdentificacion = document.querySelector('#identidad');
const inputPrimerNombre = document.querySelector('#primer_nombre');
const inputSegundoNombre = document.querySelector('#segundo_nombre');
const inputPrimerApellido = document.querySelector('#primer_apellido');
const inputSegundoApellido = document.querySelector('#segundo_apellido');
const inputFecha = document.querySelector('#fecha_nacimiento');
const inputEdad = document.querySelector('#edad');
const inputCorreo = document.querySelector('#correo');
const inputRadioMasculino = document.querySelector('#masculino');
const inputRadioFemenino = document.querySelector('#femenino');


botonRegistrar.addEventListener('click', obtenerDatos);
inputFecha.addEventListener('change', calcularEdad);


function obtenerDatos() {
    let identidad = inputIdentificacion.value;
    let primerNombre = inputPrimerNombre.value;
    let segundoNombre = inputSegundoNombre.value;
    let primerApellido = inputPrimerApellido.value;
    let segundoApellido = inputSegundoApellido.value;
    let edad = inputEdad.value;
    let correo = inputCorreo.value;

    let estadoError = validar(identidad, primerNombre, segundoNombre, primerApellido, segundoApellido, edad, correo);

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

function validar(pIdentidad, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEdad, pCorreo) {
    let error = false;
    let expNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;
    let expCorreo = /^.+@.+\..+$/;

    inputEdad.min = 1;
    inputEdad.max = 99;

    // Identidad
    if (pIdentidad == '' || pIdentidad.length == 0) {
        inputIdentificacion.classList.add('errorInput');
        error = true;
    } else {
        inputIdentificacion.classList.remove('errorInput');
    }

    // Primer nombre
    if (pPrimerNombre == '' || pPrimerNombre.length == 0 || expNombre.test(pPrimerNombre) == false) {
        inputPrimerNombre.classList.add('errorInput');
        error = true;
    } else {
        inputPrimerNombre.classList.remove('errorInput');
    }

    // Segundo nombre
    if (pSegundoNombre == '' || pSegundoNombre.length == 0 || expNombre.test(pSegundoNombre) == false) {
        inputSegundoNombre.classList.add('errorInput');
        error = true;
    } else {
        inputSegundoNombre.classList.remove('errorInput');
    }

    // Primer apellido
    if (pPrimerApellido == '' || pPrimerApellido.length == 0 || expNombre.test(pPrimerApellido) == false) {
        inputPrimerApellido.classList.add('errorInput');
        error = true;
    } else {
        inputPrimerApellido.classList.remove('errorInput');
    }

    // Segundo apellido
    if (pSegundoApellido == '' || pSegundoApellido.length == 0 || expNombre.test(pSegundoApellido) == false) {
        inputSegundoApellido.classList.add('errorInput');
        error = true;
    } else {
        inputSegundoApellido.classList.remove('errorInput');
    }

    // edad
    if (pEdad < inputEdad.min || pEdad > inputEdad.max) {
        inputFecha.classList.add('errorInput');
        error = true;
    } else {
        inputFecha.classList.remove('errorInput');
    }

    // correo
    if (expCorreo.test(pCorreo) == false) {
        inputCorreo.classList.add('errorInput');
        error = true;
    } else {
        inputCorreo.classList.remove('errorInput');
    }

    // sexo
    var radioButtons = document.getElementsByName("sexo_radio");

    if (radiosVacios(radioButtons)) {
        document.querySelector('#td_sexo').classList.add('errorInput');
    } else {
        document.querySelector('#td_sexo').classList.remove('errorInput');
    }

    return error;
};

function radiosVacios(radios) {
    let radiosVacios = true;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radiosVacios = false;
        }
    }

    return radiosVacios;
};

function calcularEdad() {

    let inputFechaDate = new Date(inputFecha.value);
    let edadEnMiliSegundos = Date.now() - inputFechaDate.getTime();
    let edadFecha = new Date(edadEnMiliSegundos);

    if (edadEnMiliSegundos > 0) {
        inputEdad.value = Math.abs(edadFecha.getUTCFullYear() - 1970);
    }
    else {
        inputEdad.value = "n/A";
    }
};

