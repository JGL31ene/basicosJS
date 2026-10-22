function sumarDeclaration (n1=0, n2=0){
    return n1 + n2
}

console.log(sumarDeclaration(10,10))

const sumarExpresion = function (n1=0, n2=0){
    return n1 + n2
}

console.log(sumarDeclaration(10 + 10))

const sumarArrow = (n1=0, n2=0) => {
    return n1 + n2
}
console.log(SumarArrow(5, 50))

const sumarArrow2 = (n1=0, n2=0) => n1 + n2
console.log(sumarArrow(10, 20))

const lenguajesDeProgramacion = ["JavaDcrip", "Python", "c#", "Ruby", "PHP", "LISP"]

const nuevoArray = lenguajesDeProgramacion.map(function(lenguaje)){
    if(lenguaje === 'Python'){
        return 'Mojo'
    }else{
        return lenguaj
    }
}

const nuevoArray = lenguajesDeProgramacion.map(lenguaje => {
    if (lenguaje == 'Python'){
        return 'ArrowMojo'
    }else{
        return lenguaje
    }
})

