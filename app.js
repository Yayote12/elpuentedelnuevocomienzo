// Esperamos a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.getElementById('contactForm');

    // Interceptamos el envío del formulario
    contactForm.addEventListener('submit', function(evento) {
        // Evita que la página se recargue (comportamiento por defecto)
        evento.preventDefault();
        
        // Obtenemos los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Aquí podrías conectar en el futuro con tu backend o una API
        console.log(`Mensaje de: ${nombre}, Correo: ${email}`);
        
        // Damos retroalimentación al usuario
        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje en El Puente del Nuevo Comienzo.`);
        
        // Limpiamos el formulario
        contactForm.reset();
    });

});