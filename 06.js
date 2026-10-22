const legnguajesDeProgramacion = ["JavaScript", "Python", "C#", "Ruby", "PHP", "LISP"]
const numeros = [10, 20, 30, 40, 50]

let nuevoArray

// Filter
nuevoArray = legnguajesDeProgramacion.filter(lenguaje => lenguaje === 'JavaScript')
console.log(nuevoArray)

// Comprobar si un elemento existe
const resultado = legnguajesDeProgramacion.includes('Ruby')
console.log(resultado)

// Some - Devuelve si al menos uno cumple con la condición
const resultadoNum = numeros.some( numero => numero > 15)
console.log('resultado' , resultadoNum)

// Find - Devuelve si el primer elemento que cumpla con la condición 
const resultadoNum2 = numeros.find( numero => numero > 15)
console.log('resultado num 2' , resultadoNum2)

// Every - Retorna true o false si todos cumplen la condición
const resultadoNum3 = numeros.every( numero => numero > 15)
console.log('resultado num 3' , resultadoNum3)

// Reduce - Acumulando en el total 
const resultadoNum4 = numeros.reduce( (total, numero) => numero + total, 0)
console.log('resultado num 4' , resultadoNum4)

// ForEach - Iterar en cada uno de los elementos de un Array
legnguajesDeProgramacion.forEach( (lenguaje, index) => console.log(lenguaje))

// Crear un nuevo array
const arrayMap = legnguajesDeProgramacion.map( lenguaje => lenguaje )
console.log('arrayMap: ', arrayMap)


