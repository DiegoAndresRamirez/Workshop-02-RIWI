// **Detalles del Reto:**
// - Establecimiento de Condiciones:
//     - Evaluación de Condiciones:
//         - Julian tiene diferentes factores que influyen en cómo decide pasar el día. Estos incluyen su nivel de energía, el clima, y su carga de trabajo actual.
//         - El programa deberá evaluar estos factores y usar valores que pueden ser considerados truthy o falsy para tomar decisiones.
//     - Lógica de Decisión:
//         - Utiliza una serie de declaraciones if-else para evaluar los factores. Por ejemplo, si el nivel de energía de Julian es bajo (null o 0), puede decidir no salir a correr y en lugar de eso tomar un día libre.
//         - Considera cómo condiciones como un clima malo (undefined o false) podrían influir en su decisión de quedarse en casa trabajando en proyectos personales o simplemente relajarse.
//     - Influencia de Truthy y Falsy:
//         - Asegúrate de que Julian entienda cómo valores aparentemente no relacionados pueden influir en la lógica de control de flujo. Por ejemplo, cualquier string no vacío es truthy y podría representar un clima bueno, lo que animaría a Julian a salir a correr.

// **Consejos para Julian:**

// Examina cuidadosamente qué valores son considerados truthy y cuáles falsy en JavaScript. Esto es esencial para configurar correctamente las condiciones en tus declaraciones if-else.

// Piensa en cómo cada decisión está ligada a la evaluación de una condición y cómo podrías usar esto para modelar decisiones más complejas basadas en múltiples factores.

// **Instrucciones Adicionales:**

// Integra la función console.log para mostrar el resultado de cada decisión, permitiendo a Julian ver claramente qué actividad ha sido seleccionada cada día según las condiciones dadas.

//const falsey = [false, 0, -0, 0n, "", null, undefined, NaN];
//const truthy = [true, 1, -1, 1n, "Hello", [], {}, Symbol(), function() {}, new Date()];

//sallir a correr, tomar el dia libre, quedarse en casa trabajando en proyectos personales o simplemente relajarse

alert("Bienvenido a tu gestor de dias, en este programa podras escoger como pasar tu dia")
let Salir_a_trotar = "hello"
let trabajar = 1
let ir_al_gym = -1

let mal_clima 
let poca_energia 
let carga_de_trabajo

function pasar_dia(){
    let pregunta = prompt("como quieres pasar el dia? \n\t1: Ir al GYM \n\t2: Trabajar \n\t3: Salir a trotar")
    if (pregunta === "1" || pregunta === "ir al gym") {
        poca_energia = confirm("Te sientes con energía? (aceptar / cancelar)");
        poca_energia ? (alert("¡Tienes las baterías recargadas, al GYM!"), console.log("Iras al GYM: ¡Tienes las baterías recargadas, al GYM!")) : (alert("Tienes poca energía y ánimo, te quedarás en tu casa descansando."), console.log("Te quedaras en casa: Tienes poca energía y ánimo, te quedarás en tu casa descansando."));
    }else if (pregunta === "2" || pregunta ==="trabajar"){
        carga_de_trabajo = Number(prompt("Tienes mucha carga de trabajo hoy? (si = 0 / no = 1)"))
        carga_de_trabajo === 0 ? (alert("Tienes mucho trabajo acumulado, Quedate en casa para retomar"), console.log("Te quedaras en casa: Tienes mucho trabajo acumulado, Quedate en casa para retomar")) : (alert("Estas listo para trabajar como el mejor!!!"), console.log("Iras a trabajar: Estas listo para trabajar como el mejor!!!"))
    } else if (pregunta === "3" || pregunta ==="salir a trotar"){
        mal_clima = (prompt("esta lloviendo? (si = 'deja el espacio en blanco' / no)"))
        mal_clima === "" ? (alert("Hay mal clima para trotar, quedate en casa viendo una peli!"), console.log("Te quedaras en casa: Hay mal clima para trotar, quedate en casa viendo una peli!")) : (alert("Estas listo para forjar musculo !!!!"), console.log("Iras a trotar: Estas listo para forjar musculo !!!!"))
    } else{
        alert("opcion no valida...")
    }
    let repetir = confirm("quieres repetir el ciclo?")
    if (repetir){
        pasar_dia()
    }
}
pasar_dia()