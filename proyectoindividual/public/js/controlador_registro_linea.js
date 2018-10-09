

function checkPass(){
 let pass  = document.getElementById("#contraseña").value;
 let rpass  = document.getElementById("#contraseña_confirmacion").value;
if(pass != rpass){
    document.getElementById("submit").disabled = true;
    $('.missmatch').html("Contraseña ingresada no coincide. Intente nuevamente");
}else{
    $('.missmatch').html("");
    document.getElementById("submit").disabled = false;
}
}