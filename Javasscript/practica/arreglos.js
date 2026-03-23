const numbers = [10,20,30]

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element)
}

for (let i = numbers.length-1 ; i >= 0; i--) {
    const element2 = numbers[i];
    console.log(element2)

}


let users = [
  {
    name: "Omar",
    age: 25,
    city: "Moroleon",
    hobbies: ["gym", "music", "games"],
    location:{
        state:"Guanajuato",
        city:"Celaya"
    }
  },
  {
    name: "Ana",
    age: 29,
    city: "CDMX",
    hobbies: ["reading", "movies", "travel"]
  }
]

/*for(let i =0;i<users.length;i++){
    console.log(users[i].name) 
    console.log(users[i].age)
    console.log(users[i].city)
    for(let i2 =0;i2<users[i].hobbies.length;i2++){
        console.log(users[i].hobbies[i2])
    }

}*/
console.log(users[0].location.city)




const lista=[1,2,3,4,5,6,7,8,9,10]

const par=lista.filter(n=>n%2==0)

for(let i=0;i<par.length;i++){
    console.log(par[i]*2)
}


const numeros = [1,2,3]

const result = numbers.map(n => n * 2)

console.log(result)

const numeros2 = [1,2,3]

const mul = numbers.map(function (n){
    return n*2
})

console.log(result)
