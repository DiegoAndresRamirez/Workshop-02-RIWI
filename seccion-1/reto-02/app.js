let souvenirs = []
alert("¡Bienvenido a tu tienda de souvenirs!")

function addProduct() {
    const product = {
        name_product: prompt("Ingresa el nombre del producto: "),
        cost_product: parseInt(prompt("Ingresa el precio del producto: ")),
        availability_product: prompt("Ingresa si está disponible o no (si / deja el espacio vacío)") === "si"
    }
    souvenirs.push(product)   

    console.log(typeof product.name_product === "string" ? "El nombre del producto es un string." : "Error: El nombre del producto no es un string.")
    console.log(!isNaN(product.cost_product) ? "El costo del producto es un número." : "Error: El costo del producto no es un número.")
    console.log(typeof product.availability_product === "boolean" ? "La disponibilidad del producto es un booleano." : "Error: La disponibilidad del producto no es un booleano.")

    let option = prompt("¿Deseas agregar otro producto? (si / no)")
    if (option === "si") {
        addProduct()
    } else {
        console.log(souvenirs)
    }
}
addProduct()
