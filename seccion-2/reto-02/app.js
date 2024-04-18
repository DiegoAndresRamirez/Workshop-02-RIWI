let daily_budget
let eating_out
let buying_books
let savings
let options 

function expenses(){
    alert("bienvenido a tu gestor de gastos!!! \nprimero ingresemos tu presupuesto diario para hacer calculos...")
    daily_budget = Number(prompt("ingresa tu presupuesto diario: "))
    console.log("tu presupuesto es de: " + daily_budget)
    savings = Number(prompt("ingresa una cantidad que quieras ahorrar diariamente de tu presupuesto: \ntu presupuesto es: " + daily_budget))
    console.log("tus ahorros diarios son de: " + savings + " y tu presupuesto quedo en: "+ (daily_budget-savings))
    options = Number(prompt("tienes 2 opciones para divertirte el dia de hoy:\n1: Comer afuera\n2: Comprar libros\n\nRecuerda que tu presupuesto es de: " + (daily_budget-savings)))
    if (options === 1){
        eating_out = Number(prompt("Cuanto quieres gastar comiendo afuera?:\n\nRecuerda que tu presupuesto es de: " + (daily_budget-savings)))
        console.log("decidiste gastar "+ eating_out + " en comer afuera")
        if (eating_out > ((daily_budget-savings)*0.5)){
            eating_out_desicion = confirm("Estas gastando mas de la mitad de tu presupuesto en comer afuera, no dejaras para comprar libros?")
            if (eating_out_desicion){
                alert("Tendras menos dinero para gastar libros, que disfrutes tu comida!!");
            } else{
                alert("Disfruta tu comida!!!")
            }
        }else{
            alert("Disfruta tu comida!!!")
        }
    }else if (options === 2){
        buying_books = Number(prompt("Cuanto quieres gastar comprando libros?:\n\nRecuerda que tu presupuesto es de: " + (daily_budget-savings)))
        console.log("decidiste gastar "+ buying_books + " en comprar libros")
        if (buying_books > ((daily_budget-savings)*0.5)){
            buying_books_desicion = confirm("Estas gastando mas de la mitad de tu presupuesto en comprar libros, no dejaras para comer afuera?")
            if (buying_books_desicion){
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
    let repeat = confirm("¿Quieres repetir el ciclo?")
    if (repeat) {
        expenses()
    }
}
expenses()