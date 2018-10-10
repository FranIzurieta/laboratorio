const botonActualizar = document.querySelector('#boton_actualizar');
const inputNombre = document.querySelector('#nombreEditorial');
const inputPais = document.querySelector('#lista');


botonActualizar.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    let nombre = inputNombre.value;
    
    let estadoError = validar(nombre);

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

function validar(pNombre) {
    let error = false;
    let expNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;
   
    // Nombre
    if (expNombre.test(pNombre) == false) {
        inputNombre.classList.add('errorInput');
        error = true;
    } else {
        inputNombre.classList.remove('errorInput');
    }

    // Paises
    let texto = document.getElementById("lista"),
        element = document.getElementById("paises");

    if (element.querySelector("option[value='" + texto.value + "']")) {
        inputPais.classList.remove('errorInput');
    } else {
        inputPais.classList.add('errorInput');
        error = true;
    }

    return error;
};



