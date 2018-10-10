const botonRegistrar = document.querySelector('#boton_actualizar');
const inputTitulo = document.querySelector('#titulolibro');
const inputPrecio = document.querySelector('#precio');
const inputAutor = document.querySelector('#autor');

botonRegistrar.addEventListener('click', obtenerDatos);



function obtenerDatos() {
    let titulo = inputTitulo.value;
    let precio = inputPrecio.value;
    let autor = inputAutor.value;
    
    let estadoError = validar(titulo, precio, autor);

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

function validar(pTitulo, pPrecio, pAutor) {
    let error = false;
    let expNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;
    let expPrecio = /^[0-9]+(\.[0-9]{1,2})?$/;

    // Titulo
    if (pTitulo == '' || pTitulo.length == 0 || expNombre.test(pTitulo) == false) {
        inputTitulo.classList.add('errorInput');
        error = true;
    } else {
        inputTitulo.classList.remove('errorInput');
    }

    // Precio
    if (expPrecio.test(pPrecio) == false) {
        inputPrecio.classList.add('errorInput');
        error = true;
    } else {
        inputPrecio.classList.remove('errorInput');
    }

    // Autor
    if (pAutor == '' || pAutor.length == 0 || expNombre.test(pAutor) == false) {
        inputAutor.classList.add('errorInput');
        error = true;
    } else {
        inputAutor.classList.remove('errorInput');
    }

    return error;
};

