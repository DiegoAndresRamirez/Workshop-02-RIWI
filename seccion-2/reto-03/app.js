let clima
let espacio_maleta
let limite_peso
objects_lluvia = [
    {
        nombre: "paraguas",
        clima: "lluvia",
        peso: 5,
        espacio: 1
    },
    {
        nombre: "botas",
        clima : "lluvia",
        peso: 10,
        espacio: 2
    }
]
objects_sol = [
    {
        nombre: "gafas",
        clima: "sol",
        peso: 1,
        espacio: 1
    },
    {
        nombre: "protector",
        clima: "sol",
        peso: 1,
        espacio: 1
    }
]
objects_adicionales = [
    {
        nombre: "camara",
        clima: "aleatorio",
        peso: 1,
        espacio: 1
    },
    {
        nombre: "llaves",
        clima: "aleatorio",
        peso: 1,
        espacio:1
    }
]
let maleta = []

alert("Bienvenido a tus gestiones de decisiones de ultima hora...\nprimero necesitamos algunos datos...")
clima = prompt("ingresa el clima: (sol  / lluvia)")
if (clima === "sol"){
    espacio_maleta = Number(prompt("ingresa el espacio que tiene tu maleta o sus compartimentos ( ej. 10)"))
    console.log(`El espacio de tu maleta es de: ${espacio_maleta} compartimentos`)
    limite_peso = Number(prompt("ingresa el limite de peso que tiene tu maleta: (ej. 10)"))
    console.log(`El limite de peso de tu maleta es de: ${limite_peso} kilos`)
    objects = Number(prompt(`El clima el dia de hoy es: ${clima}, tu maleta tiene ${limite_peso} kilos y ${espacio_maleta} compartimentos, puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${clima}\n1: ${objects_sol[0].nombre}\n2: ${objects_sol[1].nombre}\n`))
    if (objects === 1){
        maleta.push(objects_sol[0])
        console.log("se ha agregado gafas a tu maleta")
        console.log(maleta)
    } else if (objects === 2){
        maleta.push(objects_sol[1])
        console.log("se ha agregado protector a tu maleta")
        console.log(maleta)
    }else{
        alert("opcion no valida...")
    }
}else if (clima === "lluvia"){
    espacio_maleta = Number(prompt("ingresa el espacio que tiene tu maleta o sus compartimentos ( ej. 10)"))
    console.log(`El espacio de tu maleta es de: ${espacio_maleta} compartimentos`)
    limite_peso = Number(prompt("ingresa el limite de peso que tiene tu maleta: (ej. 10)"))
    console.log(`El limite de peso de tu maleta es de: ${limite_peso} kilos`)
    objects = Number(prompt(`El clima el dia de hoy es: ${clima}, tu maleta tiene ${limite_peso} kilos y ${espacio_maleta} compartimentos, puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${clima}\n1: ${objects_lluvia[0].nombre}\n2: ${objects_lluvia[1].nombre}\n`))
    if (objects === 1){
        maleta.push(objects_lluvia[0])
        console.log("se ha agregado paraguas a tu maleta")
        console.log(maleta)
    } else if (objects === 2){
        maleta.push(objects_lluvia[1])
        console.log("se ha agregado botas a tu maleta")
        console.log(maleta)
    }else{
        alert("opcion no valida...")
    }
}else{
    alert("opcion no valida...")
}