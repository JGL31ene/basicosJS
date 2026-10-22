let catName = "Fluffy"
let catAge = 4

function meow(){
    console.log("Meooooowwwwwwww")
}

meow()

let cat = {
    name: "Fluffy",
    age: 4,
    foods: {
        favorite: "Milk",
        second: "Tuna",
    },
    eyeColor: "blue",
    meow() {
        console.log("Meooowwwwwwwww")
    }
}

console.log(cat.name)
console.log(cat.age)
console.log(cat.ayeColor)
console.log(cat.meow())

const producto = {
    nombre: "Apple Vision",
    precio: 2999,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log( producto.nombre )
console.log( producto.precio )
console.log( producto.disponible )

// Modificar
producto.nombre = "MacBook Pro"
console.table(producto)

// Agregar
producto.imagen = "imagen.jpg"
console.table(producto)

// Eliminar
delete producto.imagen
console.table(producto)


// Destructuring
const { nombre, precio, disponible } = product
console.log( nombre )
console.log( precio )
console.log( disponible )

// Object literal Enhancement
const user = "Chris"
const authenticated = true

const newObject = {
    user: user,
    authenticated: authenticated
}

console.table(newObject)

// Objectos - Destructuring con 2 o más objectos con el mismo nombre de propiedad

const cliente = {
    nombre: "Christian", 
    telefono: "664-2323232",
    ciudad: "Tijuana"
}

const usuario = {
    nombre: "Daniel",
    premium: true
}

const { nombre: nombreCliente, telefono, ciudad } = cliente
const { nombre: nombreUsuario, premium } = usuario

//const nuevoObjecto = Object.assign(cliente, usuario)
const nuevoObjeto ={
    cliente: {...cliente}, 
    usuario: {...usuario}
} 
console.log(nuevoObjecto)