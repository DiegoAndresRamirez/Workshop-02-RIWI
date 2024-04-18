let budget = Number(prompt("ingresa tu presupuesto inicial del viaje: "));
console.log("tu presupuesto: " + budget);
const accommodation = Number(prompt("ingresa el coste de tu alojamiento: tu presupuesto es: "+ budget));
console.log("costo de alojamiento: "+ accommodation)
const transportation = Number(prompt("ingresa el coste de tu transporte: tu presupuesto es: "+ (budget-accommodation)));
console.log("costo de transporte: "+ transportation)
const food = Number(prompt("ingresa el coste de tu comida: tu presupuesto es: "+ (budget-accommodation-transportation)));
console.log("costo de comida: "+ food)
const valor_souvenir = 500;
console.log("el precio de tu souvenir favorito es de: " + valor_souvenir)
const dinero_restante = (budget-accommodation-transportation-food)
console.log("tu dinero restante es de: "+ dinero_restante)
if (dinero_restante < valor_souvenir){
    alert("No tienes suficiente dinero para comprar otro souvenir!")
} else{
    alert("Aun te queda dinero para comprar tu souvenir")
}