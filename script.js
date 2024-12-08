
// Muestra un mensaje en la consola al cargar la página 
function logMessage() {  
    console.log("La página se ha cargado correctamente");  
}   
window.onload = () => {  
    logMessage(); 
};  

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