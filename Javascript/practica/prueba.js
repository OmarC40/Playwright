let users = [
  { name: "Omar", age: 25 },
  { name: "Ana", age: 29 },
  { name: "Luis", age: 18 }
]

function users21(arr){
    const user21=[]

    for(let i=0;i<arr.length;i++){
        let ageuser=arr[i].age
        if(ageuser>21){
            let usuario={name:arr[i].name,age:arr[i].age}
            user21.push(usuario)
        }
    }
    return user21
}

console.log(users21(users))