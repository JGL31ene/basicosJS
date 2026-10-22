let miForma = document.querySelector("#miForma")
let valorTarea = document.querySelector("#valorTarea")
let nuestraLista = document.querySelector("#nuestraLista")

miForma.addEventListener("submit", (e)=>{
e.preventDefault()
crearTarea(valorTarea.value)
})

const crearTarea = (tarea) => {
    console.log(tarea)
    let nuestroHTML = `<li>${tarea} <button onclick= "borrarElemento(this)">Borrar</button> </li>`
    nuestraLista.insertAdjacentElementHTML("beforeend", nuestroHTML)
    valorTarea.value = ""
    valorTarea.focus()
}

const borrarElemento = (elementoABorrar) => {
    elementoABorrar.parentElement.remove()
}