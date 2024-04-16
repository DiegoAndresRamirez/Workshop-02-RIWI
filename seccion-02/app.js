// - Reto 2: Tipos de Souvenirs

// Descripción: Julian desea tener un programa en JavaScript que le permita gestionar una lista de souvenirs potenciales para comprar durante su viaje. Cada souvenir tiene características específicas: un nombre, un costo y la disponibilidad para la compra. Es importante que Julian pueda evaluar cada uno de estos aspectos, que están representados por diferentes tipos de datos en el programa.

// **Detalles del Reto:**

// - Requerimientos del Programa:
//     - Gestión de souvenirs:
//         - El programa debe permitir a Julian introducir diversos souvenirs con sus respectivos detalles. Julian quiere poder ingresar el nombre del souvenir, cuánto cuesta y si está disponible en ese momento o no.
//     - Representación de Datos:
//         - Cada aspecto del souvenir (nombre, costo, disponibilidad) debe ser representado por un tipo de dato adecuado:
//             - El nombre debe ser una cadena de texto.
//             - El costo debe ser un número que pueda incluir decimales.
//             - La disponibilidad debe ser un valor booleano que indique si el souvenir puede ser comprado (true) o no (false).
//     - Verificación de Tipos de Datos:
//         - Julian quiere asegurarse de que los tipos de datos sean correctos para evitar errores al calcular costos o al mostrar la disponibilidad de los souvenirs. El programa debe incluir una función que verifique el tipo de cada dato ingresado usando typeof y que informe si los tipos son los esperados.

// **Consejos para Julian:**

// Considera utilizar funciones para capturar y validar la entrada del usuario. Esto puede ayudar a mantener tu código organizado y facilitar la verificación de tipos.

// Asegúrate de proporcionar mensajes claros de error o confirmación sobre los tipos de datos para cada entrada, lo cual es crucial para la depuración y el mantenimiento del código.

// **Instrucciones Adicionales:**

// Implementa una estructura de control que permita a Julian revisar todos los souvenirs ingresados y decidir cuáles quiere comprar, basándose en su disponibilidad y su presupuesto actual. Esta lógica debería ayudar a Julian a gestionar sus recursos de manera eficiente durante el viaje.
let souvenirs = []
let bienvenida = alert("bienvenido a tu tienda de souvenirs!")
const list_souvenirs = {
    nombre_product: prompt("ingresa el nombre del producto: "),
    verifi_name: console.log(typeof nombre_product),
    costo_product : parseInt(prompt("ingresa el precio del producto: ")),
    verifi_price: console.log(typeof costo_product),
    disponibilidad_product: prompt("ingresa si esta disponible o no (si / deja el espacio vacio)"),
    verifi_disp: console.log(typeof disponibilidad_product),
}
souvenirs.push(list_souvenirs)
let opcion = prompt("desea agregar otro producto? (si / no)")
if (opcion === "si"){
    const list_new = {
        nombre_product: prompt("ingresa el nombre del producto: "),
        verifi_name: console.log(typeof nombre_product),
        costo_product : parseInt(prompt("ingresa el precio del producto: ")),
        verifi_price: console.log(typeof costo_product),
        disponibilidad_product: prompt("ingresa si esta disponible o no (si / deja el espacio vacio)"),
        verifi_disp: console.log(typeof disponibilidad_product),
    }
    souvenirs.push(list_new)
    console.log(souvenirs)
}else{
    console.log(souvenirs)
}