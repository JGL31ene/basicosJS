// Functions
function saludo(){
    alert("Hola!, Mi nombre es Christian")
}

saludo()

function saludoConNombre(nombre) {
    alert("Hola!, Mi nombre es " + nombre)
    //alert(`Hola!, Mi nombre es ${nombre}`)
}

saludoConNombre("Christian")
saludoConNombre("Juan")
saludoConNombre("Susana")
saludoConNombre("Victoria")

function suma(a, b) {
    let resultado = a + b
    return resultado
}

suma(5, 5)
suma(10, 5)
suma(2, 5)

function resta(a, b) {
    let resultado = a - b
    return resultado
}

resta(10, 3)
resta(17, 10)
resta(10, 10)

function multiplicacion(a, b) {
    let resultado = a * b
    return resultado
}

multiplicacion(5, 2)
multiplicacion(6, 4)
multiplicacion(20, 5)