let clima
let espacio_maleta
let limite_peso
objects_lluvia = [
    {
        nombre: "paraguas",
        clima: "lluvia",
        peso: 2,
        espacio: 1
    },
    {
        nombre: "botas",
        clima : "lluvia",
        peso: 2,
        espacio: 2
    }
]
objects_sol = [
    {
        nombre: "gafas",
        clima: "sol",
        peso: 6,
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
        peso: 2,
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
    function agregar_objetos_sol(){
        espacio_maleta = Number(prompt("ingresa el espacio que tiene tu maleta o sus compartimentos ( ej. 10)"))
        console.log(`El espacio de tu maleta es de: ${espacio_maleta} compartimentos`)
        limite_peso = Number(prompt("ingresa el limite de peso que tiene tu maleta: (ej. 10)"))
        console.log(`El limite de peso de tu maleta es de: ${limite_peso} kilos`)
        objects = Number(prompt(`El clima el dia de hoy es: ${clima}, tu maleta tiene ${limite_peso} kilos y ${espacio_maleta} compartimentos, puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${clima}\n1: ${objects_sol[0].nombre}, peso: ${objects_sol[0].peso}, espacio: ${objects_sol[0].espacio} \n2: ${objects_sol[1].nombre} , peso: ${objects_sol[1].peso}, espacio: ${objects_sol[1].espacio} \n`))
        if (objects === 1){
            if (objects_sol[0].peso > limite_peso || objects_sol[0].espacio > espacio_maleta){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_sol[0].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    agregar_objetos_sol()
                }
            }else{
                maleta.push(objects_sol[0])
                console.log("se ha agregado gafas a tu maleta")
                alert("se agrego el objeto exitosamente!!!")
                console.log(maleta)
                let repetir = confirm("Todavia tienes espacio, quieres agregar objetos adicionales?")
                if (repetir) {
                    agregar_objetos_adicionales()
                }
            }
    
        }else if (objects === 2){
            if (objects_sol[1].peso > limite_peso || objects_sol[1].espacio > espacio_maleta){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_sol[1].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    agregar_objetos_sol()
                }
            }else{
                maleta.push(objects_sol[1])
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
    agregar_objetos_sol()

}else if (clima === "lluvia"){
    function agregar_objetos_lluvia(){
        espacio_maleta = Number(prompt("ingresa el espacio que tiene tu maleta o sus compartimentos ( ej. 10)"))
        console.log(`El espacio de tu maleta es de: ${espacio_maleta} compartimentos`)
        limite_peso = Number(prompt("ingresa el limite de peso que tiene tu maleta: (ej. 10)"))
        console.log(`El limite de peso de tu maleta es de: ${limite_peso} kilos`)
        objects = Number(prompt(`El clima el dia de hoy es: ${clima}, tu maleta tiene ${limite_peso} kilos y ${espacio_maleta} compartimentos, puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${clima}\n1: ${objects_lluvia[0].nombre} , peso: ${objects_lluvia[0].peso}, espacio: ${objects_lluvia[0].espacio}  \n2: ${objects_lluvia[1].nombre} , peso: ${objects_lluvia[1].peso}, espacio: ${objects_lluvia[1].espacio}  \n`))
        if (objects === 1){
            if (objects_lluvia[0].peso > limite_peso || objects_lluvia[0].espacio > espacio_maleta){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_lluvia[0].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    agregar_objetos_lluvia()
                }
            }else{
                maleta.push(objects_lluvia[0])
                console.log("se ha agregado paraguas a tu maleta")
                alert("se agrego el objeto exitosamente!!!")
                console.log(maleta)
                let repetir = confirm("Todavia tienes espacio, quieres agregar objetos adicionales?")
                if (repetir) {
                    agregar_objetos_adicionales()
                }
            }
        } else if (objects === 2){
            if (objects_lluvia[1].peso > limite_peso || objects_lluvia[1].espacio > espacio_maleta){
                alert(`Tu maleta no soporta el espacio y el peso del objeto`)
                console.log(`no se puedo agregar ${objects_lluvia[1].nombre} a tu maleta`)
                let repetir = confirm("¿Quieres agregar otro objeto?")
                if (repetir) {
                    agregar_objetos_lluvia()
                }
            }else{
                maleta.push(objects_lluvia[1])
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
    agregar_objetos_lluvia()
}else{
    alert("opcion no valida...")
}
function agregar_objetos_adicionales(){
    adicionales = Number(prompt(`Puedes llevar articulos adicionales contigo, te dare algunas recomendaciones dado el clima ${clima}\n1: ${objects_adicionales[0].nombre}, peso: ${objects_adicionales[0].peso}, espacio: ${objects_adicionales[0].espacio} \n2: ${objects_adicionales[1].nombre} , peso: ${objects_adicionales[1].peso}, espacio: ${objects_adicionales[1].espacio} \n`))
    if (adicionales === 1){
        if (objects_adicionales[0].peso > limite_peso || objects_adicionales[0].espacio > espacio_maleta){
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
        if (objects_adicionales[1].peso > limite_peso || objects_adicionales[1].espacio > espacio_maleta){
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