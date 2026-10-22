// Arrays | Arrgelos
let misNumerosFavoritos = [7, 77, 777, 23, 3, 5]
let misNombresFavoritos = ["Carlos", "Victoria", "Jose", "Maria"]
let misMascotas = [{nombre: "Kiri", especie: "gato"}, {nombre: "Momo", especie: "perro"}]

// Agregar elementos a un arreglo
misNombresFavoritos.push("Dany")
const nuevoArreglo = [...misNombresFavoritos, "David"]
console.log(misNombresFavoritos)
console.log(nuevoArreglo)

// Borrar elementos de un arreglo
misNombresFavoritos.splice(2, 1)
console.log(misNombresFavoritos)

const nuevoArray = misNombresFavoritos.filter( function( nombre) {
    return nombre !== 'Jose'
})
console.table(nuevoArray)

// Consultar elementos de un arreglo
console.log(misNombresFavoritos[1])
console.log(misMascotas[1].nombre)
console.log(misMascotas[0].especie)

// Modificar elementos de un arreglo
misNombresFavoritos[0]="Chris"

const misNuevosFavoritos = misNombresFavoritos.map( function(numbre) {
    if(numbre === 'Christian'){
        return 'Chris'
    } else {
        return nombre
    }
})

console.table(misNuevosFavoritos)



