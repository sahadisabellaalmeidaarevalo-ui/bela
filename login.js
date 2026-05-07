document.getElementById("formulariologin").addEventListener("submit", function(event)) {
    Event.preventdefault(); // Evita que el formulario se envíe automáticamente
    //obtener valores
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById ("contrasena").value;

    //validacion  basica 
if (usuario === "saie" && contrasena === "134340")  {
        alert("inicio de seción exitoso. ¡bienvenido lo saluda isabella!");
//aqui podrias redirigir a otra pagina:
window.location.href = "www.facebook.com";
} else {
    alert("usuario o contraseña incorrectos. intenta nuevamete.");
}
}




  