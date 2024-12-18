const formulario = document.getElementById("miFormulario");
console.log(formulario);

// el formulario es un objet del tipo htmlElement
// addEventListener es un method de el objeto formulario, que recibe dos parametros 
// el primero es el evento que se quiere escuchar, en este caso el evento submit
// el segundo es una funcion que se ejecutara cuando se dispare el evento, es una callback
formulario.addEventListener("submit", event => {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    // esta primer parte es la etiqueta de html ---> document.getElementById("nombre")
    // el .value es para obtener el valor del campo (el que escribio el usuario)
    // el .trim() es para quitar los espacios en blanco al principio y al final
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    // Variables para los mensajes de error
    const errorNombre = document.getElementById("errorNombre"); 
    // <small class="text-danger d-none" id="errorNombre">El nombre es obligatorio.</small>
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    // Inicializar validación
    let formularioValido = true;

    // Validar nombre
    if (nombre === "") {
        //alert ("el nombre debe estar completo")
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    // Validar email
    // expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    // Validar mensaje
    if (mensaje.length < 10) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Formulario enviado correctamente.");

        // creariamos un objeto literal del tipo formularioContacto

        const formularioContacto = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };
        // llamariamos a un api del backend y le mandariamos la informacion en formato json{
         // y ese api guardaria la informacion en una base de datos y luego mandaria el mail
        // aca se puede hacer la accion del envio al api del backend
    }
});