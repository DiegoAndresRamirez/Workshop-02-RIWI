// Descripción: Julian está planificando un viaje y necesita un programa en JavaScript que lo ayude a organizar su itinerario. Este programa debe permitirle definir y ajustar el destino, la duración del viaje en días y el presupuesto estimado para el viaje. Es importante que Julian pueda modificar algunos de estos datos a medida que planifica, mientras que otros permanecerán constantes.


// **Detalles del Reto:**

// - Requerimientos del Programa:
//     - Definir el destino del viaje:
//         - Julian debe poder establecer el destino de su viaje. Una vez establecido, el destino no debería cambiar.

//     - Establecer la cantidad de días:
//         - Julian debería ser capaz de establecer y ajustar la cantidad de días que durará su viaje. Esto es porque podría recibir recomendaciones que le hagan querer extender o acortar su estancia.
//     - Presupuesto del viaje:
//         - Julian necesita fijar un presupuesto inicial para su viaje, pero también debe ser capaz de ajustarlo según encuentre diferentes opciones de alojamiento, transporte y actividades.

// **Consejos para Julian:**

// Decide qué datos son propensos a cambiar durante la fase de planificación y cuáles no. Esto te ayudará a elegir entre usar let, o const para declarar tus variables.
// Considera la importancia de cada tipo de dato y cómo la flexibilidad en la modificación de estos datos puede afectar la planificación de tu viaje.

let bienvenida = alert("Bienvenido a tu planificadoro de viajes!");
const destino = prompt("Ingresa tu destino:");
console.log("tu destino es: " + destino);
let dias_vuelo = prompt("¿ingresa cuantos dias quieres viajar?");
console.log("tus dias de viaje: " + dias_vuelo);
let presupuesto = prompt("ingresa tu presupuesto inicial $$$ / el presupuesto minimo por dia para" + destino + " es de 30$: ");
console.log("tu presupuesto: " + presupuesto);
let gasto_estimado = 30;
let gasto_diario = presupuesto/dias_vuelo;
if (gasto_diario < gasto_estimado){
    new_presupuesto= prompt("tu presupuesto es muy bajo, modifica tu presupuesto")
    console.log("tu nnuevo presupuesto es: " + new_presupuesto)
    new_dias_vuelo = prompt("¿ingresa cuantos dias quieres viajar?")
    console.log("tus dias de vuelo son: "+ new_dias_vuelo)
}