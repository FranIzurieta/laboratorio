

/*inicio funciones para menú lateral de navegación*/

function abrirNav() {
    document.getElementById("menuLateral").style.width = "250px";
}

function cerrarNav() {
    document.getElementById("menuLateral").style.width = "0";
}
/*fin funciones para menú lateral de navegación*/




var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
