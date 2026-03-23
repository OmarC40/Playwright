const findMax=[4,9,2,15,6]
let mayor=findMax[0]

for(let i =0;i<findMax.length;i++){
    let actual= findMax[i]
    
    if(actual>mayor){
        mayor=actual

    }
}

console.log(mayor)



function numMay(arr){
    let mayor=findMax[0]
    for(let i =0;i<findMax.length;i++){
    let actual= findMax[i]
    
    if(actual>mayor){
        mayor=actual

    }
}
return mayor
}
console.log(numMay(findMax))




const duplicate=[1,2,2,3,4,4,5]

function removeDuplicates(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let actual = arr[i]

        if (!result.includes(actual)) {
            result.push(actual)
        }
    }

    return result
}

console.log(removeDuplicates(duplicate))


function countLetters(arr) {
    let resultado = {}

    for (let i = 0; i < arr.length; i++) {
        let actual = arr[i]

        if (resultado[actual]) {
            resultado[actual]++
        } else {
            resultado[actual] = 1
        }
    }

    return resultado
}

console.log(countLetters(["a","b","a","c","b","a"]))

let prueba={
    q:0,
    w:0,
    e:0,
    r:0
}

let letra="w"

prueba["a"]="hola"

console.log(prueba)
//---------------------------------------------------//


const arreglo=["a","b","a","c","b","a"]

function countLetters(arr) {
    let resultado = {}

    for (let i = 0; i < arr.length; i++) {
        let actual = arr[i]
        console.log(actual)

        if (resultado[actual]) {
            resultado[actual]++
        } else {
            resultado[actual] = 1
        }
        console.log(resultado[actual])
    }

    return resultado
}

console.log(countLetters(arreglo))


//--------------------------------------------------------//
//ejercicios de duplicr valor//

let numbers = [2,4,6,8]


function dupliM(arr){

    const arrdup=[]

    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        let valdu=val*2
        arrdup.push(valdu)
    }
    return arrdup
}




function dupli (arr){

    const newarr=arr.map(n=>n*2)
    return newarr
}
console.log(dupliM((numbers)))
console.log(dupli((numbers)))

//----------------------------------------//
//Ejercicio de filter

let numbers3 = [1,2,3,4,5,6]

function filter3M (arr){
    const filt=[]

    for(let i=0; i<arr.length;i++){
        let actual=arr[i]
        if(actual>3){
            filt.push(actual)
        }
    }
    return filt
}

console.log(filter3M(numbers3))

function filter3(arr){
    const filter= arr.filter(n=> n>3)
    return filter
}

console.log(filter3(numbers3))

//---------------------------------------//
// Extraer solo los nombres

let users = [
  { name: "Omar", age: 25 },
  { name: "Ana", age: 29 },
  { name: "Luis", age: 18 }
]

function nombresM (arr){
    const nombres=[]
    
    for(let i=0; i<arr.length;i++){
        let nombre=arr[i].name
        nombres.push(nombre)
    }
    return nombres
}

console.log(nombresM(users))

function nombres(arr){
    const nombres=arr.map(n=>n.name)
    return nombres
}
console.log(nombres(users))