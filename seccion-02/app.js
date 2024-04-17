let souvenirs = []
let bienvenida = alert("¡Bienvenido a tu tienda de souvenirs!")

function agregarProducto() {
    const producto = {
        nombre_product: prompt("Ingresa el nombre del producto: "),
        costo_product: parseInt(prompt("Ingresa el precio del producto: ")),
        disponibilidad_product: prompt("Ingresa si está disponible o no (si / deja el espacio vacío)") === "si"
    }
    souvenirs.push(producto)   

    console.log(typeof producto.nombre_product === "string" ? "El nombre del producto es un string." : "Error: El nombre del producto no es un string.")
    console.log(!isNaN(producto.costo_product) ? "El costo del producto es un número." : "Error: El costo del producto no es un número.")
    console.log(typeof producto.disponibilidad_product === "boolean" ? "La disponibilidad del producto es un booleano." : "Error: La disponibilidad del producto no es un booleano.")

    let opcion = prompt("¿Deseas agregar otro producto? (si / no)")
    if (opcion === "si") {
        agregarProducto()
    } else {
        console.log(souvenirs)
    }
}
agregarProducto()
