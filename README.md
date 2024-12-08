# Taller 2 Módulo 3
# Explicación de Event Loop en JavaScript  

JavaScript es un lenguaje de programación que se ejecuta en un solo hilo (single-threaded). Esto significa que solo puede ejecutar una tarea a la vez. Sin embargo, es muy eficiente en el manejo de operaciones asíncronas gracias a su modelo de "event loop."  

##  Event Loop  

1. **Call Stack (Pila de llamadas)**:  
   - Cada vez que se llama a una función, se agrega a la pila de llamadas.  
   - Cuando la función termina, se elimina de la pila y vuelve a la función anterior.  

2. **Heap (Memoria dinámica)**:  
   - Es donde se almacenan los objetos y variables en memoria.  
   - A diferencia de la pila, no tiene un orden específico de ejecución.  

3. **Callback Queue (Cola de retorno)**:  
   - Contiene funciones que están listas para ser ejecutadas.  
   - Estas funciones son generalmente aquellas que han sido programadas para ejecutarse después de que una operación asíncrona ha completado su ejecución.  

## Cómo Funciona  

1. Cuando se inicia la ejecución del código:  
   - Se ejecutan todas las funciones de la pila de llamadas hasta que no hay más funciones para ejecutar.  

2. Si JavaScript encuentra alguna operación asíncrona (como setTimeout, solicitudes de red, etc.), se inicia la operación, pero no bloquea el hilo.  
   - La función que corresponde a esa operación se mueve a la cola de retorno cuando completa su ejecución.  

3. Una vez vacía la pila de llamadas, el event loop verifica si hay funciones en la cola de retorno.  
   - Si las hay, las mueve a la pila de llamadas para que se ejecuten.  

Este ciclo continúa, lo que permite que JavaScript maneje múltiples operaciones asíncronas mientras mantiene una interfaz de usuario receptiva.