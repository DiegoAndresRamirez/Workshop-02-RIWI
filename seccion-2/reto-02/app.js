let presupuesto_diario
let comer_fuera
let comprar_libro
let ahorro
let opciones 

function gastos(){
    alert("bienvenido a tu gestor de gastos!!! \nprimero ingresemos tu presupuesto diario para hacer calculos...")
    presupuesto_diario = Number(prompt("ingresa tu presupuesto diario: "))
    console.log("tu presupuesto es de: " + presupuesto_diario)
    ahorro = Number(prompt("ingresa una cantidad que quieras ahorrar diariamente de tu presupuesto: \ntu presupuesto es: " + presupuesto_diario))
    console.log("tus ahorros diarios son de: " + ahorro + " y tu presupuesto quedo en: "+ (presupuesto_diario-ahorro))
    opciones = Number(prompt("tienes 2 opciones para divertirte el dia de hoy:\n1: Comer afuera\n2: Comprar libros\n\nRecuerda que tu presupuesto es de: " + (presupuesto_diario-ahorro)))
    if (opciones === 1){
        comer_fuera = Number(prompt("Cuanto quieres gastar comiendo afuera?:\n\nRecuerda que tu presupuesto es de: " + (presupuesto_diario-ahorro)))
        console.log("decidiste gastar "+ comer_fuera + " en comer afuera")
        if (comer_fuera > ((presupuesto_diario-ahorro)*0.5)){
            comer_fuera_desicion = confirm("Estas gastando mas de la mitad de tu presupuesto en comer afuera, no dejaras para comprar libros?")
            if (comer_fuera_desicion){
                alert("Tendras menos dinero para gastar libros, que disfrutes tu comida!!");
            } else{
                alert("Disfruta tu comida!!!")
            }
        }else{
            alert("Disfruta tu comida!!!")
        }
    }else if (opciones === 2){
        comprar_libro = Number(prompt("Cuanto quieres gastar comprando libros?:\n\nRecuerda que tu presupuesto es de: " + (presupuesto_diario-ahorro)))
        console.log("decidiste gastar "+ comprar_libro + " en comprar libros")
        if (comprar_libro > ((presupuesto_diario-ahorro)*0.5)){
            comprar_libro_desicion = confirm("Estas gastando mas de la mitad de tu presupuesto en comprar libros, no dejaras para comer afuera?")
            if (comprar_libro_desicion){
                alert("Tendras menos dinero para gastar en comer afuera, que disfrutes tus libros!!");
            } else{
                alert("Disfruta tus libros!!!")
            }
        }else{
            alert("Disfruta tus libros!!!")
        }
    }else{
        alert("opcion no valida...")
    }
    let repetir = confirm("¿Quieres repetir el ciclo?")
    if (repetir) {
        gastos()
    }
}
gastos()