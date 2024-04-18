let weather
let suitcase_space
let weight_limit
objects_rain = [
    {
        nombre: "paraguas",
        weather: "lluvia",
        peso: 2,
        espacio: 1
    },
    {
        nombre: "botas",
        weather : "lluvia",
        peso: 2,
        espacio: 2
    }
]
objects_sun = [
    {
        nombre: "gafas",
        weather: "sol",
        peso: 6,
        espacio: 1
    },
    {
        nombre: "protector",
        weather: "sol",
        peso: 1,
        espacio: 1
    }
]
objects_adicionales = [
    {
        nombre: "camara",
        weather: "aleatorio",
        peso: 2,
        espacio: 1
    },
    {
        nombre: "llaves",
        weather: "aleatorio",
        peso: 1,
        espacio:1
    }
]
let maleta = []

alert("Bienvenido a tus gestiones de decisiones de ultima hora...\nprimero necesitamos algunos datos...")
weather = prompt("ingresa el clima: (sol  / lluvia)")
if (weather === "sol"){
    function add_objets_sun(){
        suitcase_space = Number(prompt("ingresa el espacio que tiene tu maleta o sus compartimentos ( ej. 10)"))
        console.log(`El espacio de tu maleta es de: ${suitcase_space} compartimentos`)
        weight_limit = Number(prompt("ingresa el limite de peso que tiene tu maleta: (ej. 10)"))
        console.log(`El limite de peso de tu maleta es de: ${weight_limit} kilos`)
        objects = Number(prompt(`El clima el dia de hoy es: ${weather}, tu maleta tiene ${weight_limit} kilos y ${suitcase_space} compartimentos, puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${weather}\n1: ${objects_sun[0].nombre}, peso: ${objects_sun[0].peso}, espacio: ${objects_sun[0].espacio} \n2: ${objects_sun[1].nombre} , peso: ${objects_sun[1].peso}, espacio: ${objects_sun[1].espacio} \n`))
        if (objects === 1){
            if (objects_sun[0].peso > weight_limit || objects_sun[0].espacio > suitcase_space){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_sun[0].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    add_objets_sun()
                }
            }else{
                maleta.push(objects_sun[0])
                console.log("se ha agregado gafas a tu maleta")
                alert("se agrego el objeto exitosamente!!!")
                console.log(maleta)
                let repetir = confirm("Todavia tienes espacio, quieres agregar objetos adicionales?")
                if (repetir) {
                    agregar_objetos_adicionales()
                }
            }
    
        }else if (objects === 2){
            if (objects_sun[1].peso > weight_limit || objects_sun[1].espacio > suitcase_space){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_sun[1].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    add_objets_sun()
                }
            }else{
                maleta.push(objects_sun[1])
                console.log("se ha agregado protector a tu maleta")
                alert("se agrego el objeto exitosamente!!!")
                console.log(maleta)
                let repetir = confirm("Todavia tienes espacio, quieres agregar objetos adicionales?")
                if (repetir) {
                    agregar_objetos_adicionales()
                }
            }
        }else{
            alert("opcion no valida...")
        }
    }
    add_objets_sun()

}else if (weather === "lluvia"){
    function add_objetos_rain(){
        suitcase_space = Number(prompt("ingresa el espacio que tiene tu maleta o sus compartimentos ( ej. 10)"))
        console.log(`El espacio de tu maleta es de: ${suitcase_space} compartimentos`)
        weight_limit = Number(prompt("ingresa el limite de peso que tiene tu maleta: (ej. 10)"))
        console.log(`El limite de peso de tu maleta es de: ${weight_limit} kilos`)
        objects = Number(prompt(`El clima el dia de hoy es: ${weather}, tu maleta tiene ${weight_limit} kilos y ${suitcase_space} compartimentos, puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${weather}\n1: ${objects_rain[0].nombre} , peso: ${objects_rain[0].peso}, espacio: ${objects_rain[0].espacio}  \n2: ${objects_rain[1].nombre} , peso: ${objects_rain[1].peso}, espacio: ${objects_rain[1].espacio}  \n`))
        if (objects === 1){
            if (objects_rain[0].peso > weight_limit || objects_rain[0].espacio > suitcase_space){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_rain[0].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    add_objetos_rain()
                }
            }else{
                maleta.push(objects_rain[0])
                console.log("se ha agregado paraguas a tu maleta")
                alert("se agrego el objeto exitosamente!!!")
                console.log(maleta)
                let repetir = confirm("Todavia tienes espacio, quieres agregar objetos adicionales?")
                if (repetir) {
                    agregar_objetos_adicionales()
                }
            }
        } else if (objects === 2){
            if (objects_rain[1].peso > weight_limit || objects_rain[1].espacio > suitcase_space){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_rain[1].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    add_objetos_rain()
                }
            }else{
                maleta.push(objects_rain[1])
                console.log("se ha agregado botas a tu maleta")
                alert("se agrego el objeto exitosamente!!!")
                console.log(maleta)
                let repetir = confirm("Todavia tienes espacio, quieres agregar objetos adicionales?")
                if (repetir) {
                    agregar_objetos_adicionales()
                }
            }
        }else{
            alert("opcion no valida...")
        }
    }
    add_objetos_rain()
}else{
    alert("opcion no valida...")
}
function agregar_objetos_adicionales(){
    adicionales = Number(prompt(`Puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${weather}\n1: ${objects_adicionales[0].nombre}, peso: ${objects_adicionales[0].peso}, espacio: ${objects_adicionales[0].espacio} \n2: ${objects_adicionales[1].nombre} , peso: ${objects_adicionales[1].peso}, espacio: ${objects_adicionales[1].espacio} \n`))
    if (adicionales === 1){
        if (objects_adicionales[0].peso > weight_limit || objects_adicionales[0].espacio > suitcase_space){
            alert(`Tu maleta no soporta el espacio y el peso del objeto`)
            console.log(`no se puedo agregar ${objects_adicionales[0].nombre} a tu maleta`)
            let repetir = confirm("¿Quieres agregar otro objeto?")
            if (repetir) {
                agregar_objetos_adicionales()
            }
        }else{
            maleta.push(objects_adicionales[0])
            console.log("se ha agregado el objeto a tu maleta")
            alert("se agrego el objeto exitosamente!!!")
            console.log(maleta)
            let repetir = confirm("¿Quieres agregar otro objeto?")
            if (repetir) {
                agregar_objetos_adicionales()
            }
        }
    
    }else if (adicionales === 2){
        if (objects_adicionales[1].peso > weight_limit || objects_adicionales[1].espacio > suitcase_space){
            alert(`Tu maleta no soporta el espacio y el peso del objeto`)
            console.log(`no se puedo agregar ${objects_adicionales[1].nombre} a tu maleta`)
            let repetir = confirm("¿Quieres agregar otro objeto?")
            if (repetir) {
                agregar_objetos_adicionales()
            }
        }else{
            maleta.push(objects_adicionales[1])
            console.log("se ha agregado el objeto a tu maleta")
            alert("se agrego el objeto exitosamente!!!")
            console.log(maleta)
            let repetir = confirm("¿Quieres agregar otro objeto?")
            if (repetir) {
                agregar_objetos_adicionales()
            }
        }
    }else{
        alert("opcion no valida...")
    }
}