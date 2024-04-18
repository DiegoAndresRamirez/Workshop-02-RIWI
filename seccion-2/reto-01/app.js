alert("Bienvenido a tu gestor de dias, en este programa podras escoger como pasar tu dia")
let Go_run = "hello"
let work = 1
let Go_gym = -1

let bad_weather
let low_energy
let workload

function spend_day(){
    let question = prompt("como quieres pasar el dia? \n\t1: Ir al GYM \n\t2: Trabajar \n\t3: Salir a trotar")
    if (question === "1") {
        low_energy = confirm("Te sientes con energía? (aceptar / cancelar)");
        low_energy ? (alert("¡Tienes las baterías recargadas, al GYM!"), console.log("Iras al GYM: ¡Tienes las baterías recargadas, al GYM!")) : (alert("Tienes poca energía y ánimo, te quedarás en tu casa descansando."), console.log("Te quedaras en casa: Tienes poca energía y ánimo, te quedarás en tu casa descansando."));
    }else if (question === "2"){
        workload = Number(prompt("Tienes mucha carga de trabajo hoy? (si = 0 / no = 1)"))
        workload === 0 ? (alert("Tienes mucho trabajo acumulado, Quedate en casa para retomar"), console.log("Te quedaras en casa: Tienes mucho trabajo acumulado, Quedate en casa para retomar")) : (alert("Estas listo para trabajar como el mejor!!!"), console.log("Iras a trabajar: Estas listo para trabajar como el mejor!!!"))
    } else if (question === "3"){
        bad_weather = (prompt("esta lloviendo? (si = 'deja el espacio en blanco' / no)"))
        bad_weather === "" ? (alert("Hay mal clima para trotar, quedate en casa viendo una peli!"), console.log("Te quedaras en casa: Hay mal clima para trotar, quedate en casa viendo una peli!")) : (alert("Estas listo para forjar musculo !!!!"), console.log("Iras a trotar: Estas listo para forjar musculo !!!!"))
    } else{
        alert("opcion no valida...")
    }
    let repeat = confirm("quieres repetir el ciclo?")
    if (repeat){
        spend_day()
    }
}
spend_day()