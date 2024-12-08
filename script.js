// Muestra un mensaje en la consola al cargar la página   
function logMessage() {  
    console.log("La página se ha cargado correctamente");  
}   

// Muestra el nombre del servicio en la consola al hacer clic sobre éste  
function showServiceInfo(serviceName) {  
    console.log(`Servicios: ${serviceName}`);  
}  

const servicesItems = document.querySelectorAll('.services-item h3');  
servicesItems.forEach(item => {  
    item.addEventListener('click', () => {  
        showServiceInfo(item.innerText);   
    });  
});  

// Función para solicitar información al usuario al cargar la página  
function solicitarInformacion() {  
    // Solicitar nombre y validar que sea una cadena no vacía  
    let nombre;  
    do {  
        nombre = prompt("Por favor ingresa tus datos de contacto:\n\nNombre:");  
        if (nombre === null) { // Si el usuario cancela, salir de la función  
            return;  
        }  
        if (nombre && isNaN(nombre)) { // Verifica que no sea vacío y que no sea un número  
            break;  
        } else {  
            alert("Por favor, ingresa un nombre válido que contenga solo letras.");  
        }  
    } while (true);  
    
    let email;  
    do {  
        email = prompt("Por favor ingresa tu email:");  
        if (email === null) { // Si el usuario cancela, salir de la función  
            return;  
        }  
        if (email.includes("@")) {  
            break;  
        } else {  
            alert("El email debe contener un '@'. Intenta de nuevo.");  
        }  
    } while (true);  

    let telefono;  
    do {  
        telefono = prompt("Por favor ingresa tu teléfono (9 dígitos):");  
        if (telefono === null) { // Si el usuario cancela, salir de la función  
            return;  
        }  
        if (telefono.length === 9 && !isNaN(telefono)) { // Verifica que contenga 9 dígitos y que sea un número  
            break;  
        } else {  
            alert("El teléfono debe tener exactamente 9 dígitos y contener solo números. Intenta de nuevo.");  
        }  
    } while (true);  

    // Mostrar la información en la consola y en un alert  
    console.log(`Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`);  
    alert(`Gracias por la información entregada.\nTus datos están seguros y no serán usados para otros fines.`);  
}  

// Evento que se llama cuando la página se carga completamente  
window.onload = () => {  
    logMessage(); // Llama a la función para mostrar el mensaje de carga  
    solicitarInformacion(); // Llama a la función para solicitar información  
};