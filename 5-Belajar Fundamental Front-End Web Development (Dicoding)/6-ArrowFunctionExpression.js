//MENGGUNAKAN ARROW FUNCTION
const upperizedNames = ["ricky","anwar","rokyan"]
    .map(function(name){
      return name.toUpperCase()
    })
console.log(...upperizedNames)