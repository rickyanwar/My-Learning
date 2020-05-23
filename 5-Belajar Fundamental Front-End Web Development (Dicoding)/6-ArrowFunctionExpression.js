//FUNCTION BIASA
const upperizedNames = ["ricky","anwar","rokyan"]
    .map(function(name){
      return name.toUpperCase()
    })
console.log(...upperizedNames)
//MENGGUNAKAN ARROW FUNCTION

const upperizedNames = ["ricky","anwar","rokyan"]
    .map((name)=>name.toUpperCase())
console.log(...upperizedNames)

