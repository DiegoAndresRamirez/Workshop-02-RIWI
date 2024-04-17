let presupuesto = Number(prompt("ingresa tu presupuesto inicial del viaje: "));
console.log("tu presupuesto: " + presupuesto);
const alojamiento = Number(prompt("ingresa el coste de tu alojamiento: tu presupuesto es: "+ presupuesto));
console.log("costo de alojamiento: "+ alojamiento)
const transporte = Number(prompt("ingresa el coste de tu transporte: tu presupuesto es: "+ (presupuesto-alojamiento)));
console.log("costo de transporte: "+ transporte)
const comida = Number(prompt("ingresa el coste de tu comida: tu presupuesto es: "+ (presupuesto-alojamiento-transporte)));
console.log("costo de comida: "+ comida)
const valor_souvenir = 500;
console.log("el precio de tu souvenir favorito es de: " + valor_souvenir)
const dinero_restante = (presupuesto-alojamiento-transporte-comida)
console.log("tu dinero restante es de: "+ dinero_restante)
if (dinero_restante < valor_souvenir){
    alert("No tienes suficiente dinero para comprar otro souvenir!")
} else{
    alert("Aun te queda dinero para comprar tu souvenir")
}