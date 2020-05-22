
// variadic function dapat menerima banyak parameter, ex. (console.log,Math.max())
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(...favorites);
 
/* output:
Seafood Salad Nugget Soup
*/

//MENGGABUNGKAN ARRAY DENGAN SPREADING OPRATOR
const favorites1 = ["Nasi Goreng","Nasi Padang","Nasi Inak Isun"]
const favorites2  =["Jus Apel","Jus Jeruk","Jus Strawberry"]

const allFavorite = [...favorites1, ...favorites2]
console.log(allFavorite)

/* output:
const favorites1 = ["Nasi Goreng","Nasi Padang","Nasi Inak Isun"]
const favorites2  =["Jus Apel","Jus Jeruk","Jus Strawberry"]

const allFavorite = [...favorites1, ...favorites2]
console.log(allFavorite)

*/

//MEMBUAT VARIDIC FUNCTION DENGAN REST PARAMETER
function sum(...numbers){
    var result =0 
    for(let number of numbers)
    {
        result +=number
    }
    return result
}
//REST PARAMETER PADA ARRAY DESTRUCTING
const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
 
const [manufacture, weight, door, ...items] = refrigerator;
 
console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);
 
 
/* output:
Samsung
50
2
[ 'milk', 'cheese', 'egg', 'butter' ] */