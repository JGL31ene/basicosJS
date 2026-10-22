 // Funciones -  Fnction Expression

// Declaración de funcion
function sumarDeclaration(n1 = 0, n2= 0){
    return n1 + n1
}

// Expresión de funciones
const sumarExpression = function(n1=0, n2=0){
    return n1 + n2
}
console.log(sumarExpression(20, 50))


// Funciones - Arrow functions
const sumarArrow = (n1=0, n2=0) => {
    return n1 + n2
}
console.log(sumarArrow(20, 50))

const sumarArrow2 = (n1=0, n2=0) => n1 + n2
console.log(sumarArrow2(50, 50))

// Arrow Functions y Array Methods
const legnguajesDeProgramacion = ["JavaScript", "Python", "C#", "Ruby", "PHP", "LISP"]

const nuevoArray = legnguajesDeProgramacion.map(function(lenguaje) {
    if(lenguaje === 'Python'){
        return `Mojo`
    }else{
        return lenguaje
    }
})

const nuevoArrayArrowMap = legnguajesDeProgramacion.map(lenguaje => {
    if(lenguaje === 'Python'){
        return `ArrowMojo`
    }else{
        return lenguaje
    }
})

console.log(nuevoArray)
console.log(nuevoArrayArrowMap)

const nuevoArray2 = legnguajesDeProgramacion.filter(function(lenguaje) {
    return lenguaje === 'JavaScript'
})

const nuevoArrayFilterArrow = legnguajesDeProgramacion.filter(lenguaje => {
    return lenguaje !== 'JavaScript'
})
console.log(nuevoArray2)
console.log(nuevoArrayFilterArrow)

const mensaje = ( msg )=> `Hola como estas ${msg}`
console.log('Mensaje: ', mensaje('Christian'))
