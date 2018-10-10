const botonRegistrar = document.querySelector('#boton_registrar');
const inputISBN = document.querySelector('#isbn');
const inputTitulo = document.querySelector('#titulolibro');
const inputPrecio = document.querySelector('#precio');
const inputAutor = document.querySelector('#autor');
const inputCategorias = document.querySelector('#lista');
const inputEditoriales = document.querySelector('#editorial_id');

botonRegistrar.addEventListener('click', obtenerDatos);



function obtenerDatos() {
    let isbn = inputISBN.value;
    let titulo = inputTitulo.value;
    let precio = inputPrecio.value;
    let autor = inputAutor.value;

    let estadoError = validar(isbn, titulo, precio, autor);

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

function validar(pISBN, pTitulo, pPrecio, pAutor) {
    let error = false;
    let expNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;
    let expISBN = /^\d+$/;
    let expPrecio = /^[0-9]+(\.[0-9]{1,2})?$/;

    // ISBN
    if (expISBN.test(pISBN) == false) {
        inputISBN.classList.add('errorInput');
        error = true;
    } else {
        inputISBN.classList.remove('errorInput');
    }

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


    var text = document.getElementById("lista"),
    element = document.getElementById("categorias");
 

    if(element.querySelector("option[value='"+text.value+"']")){
        inputCategorias.classList.remove('errorInput');
    } else {
        inputCategorias.classList.add('errorInput');
    }



    var textEditorial = document.getElementById("editorial_id"),
    elementEditorial = document.getElementById("editoriales");
 

    if(elementEditorial.querySelector("option[value='"+textEditorial.value+"']")){
        inputEditoriales.classList.remove('errorInput');
    } else {
        inputEditoriales.classList.add('errorInput');
    }
        


    return error;
};

