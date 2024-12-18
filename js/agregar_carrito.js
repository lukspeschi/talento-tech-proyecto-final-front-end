// cuando se carga el dom se ejecuta el codigo 
/*
productoA = document.getElementById("productoA");
productoB = document.getElementById("productoB");
productoC = document.getElementById("productoC");

productoA.addEventListener("click", () => {
    // AGREGAR EL LOCALSTORAGE
    alert("Producto A agregado al carrito");
});

productoB.addEventListener("click", () => {
    alert("Producto B agregado al carrito");
});

productoC.addEventListener("click", () => {
    alert("Producto C agregado al carrito");
});*/
document.addEventListener("DOMContentLoaded", () => {
    // guardo en una constante, un array de etiquetas 
    // es un nodeList del tipo element, adentro guarda todas las anclas que encuentra que tengan la clase btn-agregar
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    console.log(botonesAgregar);
    
    // recorrreme la lista de nodos (array)
    // y para cada boton (ancla)
    botonesAgregar.forEach(boton => {
        // quedate escuchando si alguien hace click en ese boton
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            console.log(nombre);
            console.log(precio);

            // Obtener el carrito actual de localStorage
            // dame el item carrito de la memoria local del navegador y sino dame un array vacio
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            console.log(carrito);
            
            // Agregar el producto al carrito
            carrito.push({ nombre, precio });

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${nombre} agregado al carrito.`);
        });
    });
});
