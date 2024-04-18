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

let welcome = alert("Bienvenido a tu planificadoro de viajes!");
const destination = prompt("Ingresa tu destino:");
console.log("tu destino es: " + destination);
let flight_days = prompt("¿ingresa cuantos dias quieres viajar?");
console.log("tus dias de viaje: " + flight_days);
let budget = prompt("ingresa tu presupuesto inicial $$$ / el presupuesto minimo por dia para" + destination + " es de 30$: ");
console.log("tu presupuesto: " + budget);
let estimated_expennse = 30;
let daily_expense = budget/flight_days;
if (daily_expense < estimated_expennse){
    new_budget= prompt("tu presupuesto es muy bajo, deberias aumentar tu presupuesto")
    console.log("tu nuevo presupuesto es: " + new_budget)
    new_flight_days = prompt("¿ingresa cuantos dias quieres viajar?")
    let new_daily_expense = new_budget/new_flight_days;
    console.log("tus dias de vuelo actualizados son: "+ new_flight_days);
    if (new_daily_expense < estimated_expennse){
        alert("No tienes suficiente presupuesto! :(")
        console.log("no tienes suficiente presupuesto, vuelve pronto...")
    }else{
        console.log("que tengas un buen viaje!")
    } 
}else{
    alert("Que tengas un buen Viaje!")
    console.log("que tengas un buen viaje... :)")
}
