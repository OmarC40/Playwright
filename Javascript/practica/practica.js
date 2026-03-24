

const numeros = [3, 7, 2, 9, 5];


    for(let i=0;i<numeros.length;i++){
        console.log(numeros[i])
    }


const numerossuma = [10, 20, 30, 40];

function sumaarreglo(arr){

    let suma=0
    for(let i=0;i<arr.length;i++){
        suma=suma+arr[i]
    }
    return suma
}

console.log(sumaarreglo(numerossuma))


const numerosmayor = [4, 15, 2, 99, 23];


function numeromayor(arr){
    let mayor=arr[1]
    for(let i=0;i<arr.length;i++){
        let actual=arr[i]
        
        if(mayor<actual){
            mayor=actual
        }
    
    }
    return mayor
}

console.log(numeromayor(numerosmayor))


const frutas = ["manzana", "pera", "uva", "sandía"];

console.log(frutas.length)

const numerospares = [1, 2, 3, 4, 5, 6, 7, 8];

const pares=numerospares.filter(n=>n%2==0)

console.log(pares)

const numerosdobles = [2, 4, 6, 8];

const mult2=numerosdobles.map(n=>n*2)

console.log(mult2)

const palabrasM = ["hola", "mundo", "javascript"];

function mayusculas(arr){
    const mayusarr= []
    for(let i=0;i<arr.length;i++){
        
        mayusarr.push(arr[i].toUpperCase())
        console.log(arr[i])
    }
    return mayusarr
}

console.log(mayusculas(palabrasM))


const numerosduplicados = [1, 2, 2, 3, 4, 4, 5, 1];


const sintduplicados=[new Set(numerosduplicados)]

console.log(sintduplicados)


const numerosrev = [1, 2, 2, 3, 4, 4, 5, 1];


const revnumeros=numerosrev.reverse()

console.log(revnumeros)


const nombres = ["Ana", "Luis", "Pedro", "Marta"];

function buscarnombre(arr,nombre){

    for(let i=0;i<nombres.length;i++){
        let nombreactual=arr[i]
        let nombreesperado=nombre
        if(nombreactual==nombreesperado){
            return true
        }
    }
}

console.log(buscarnombre(nombres,'Luis'))





