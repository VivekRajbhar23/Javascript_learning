//Datatypes
//there are two types to data types in javascript:

//1 Primitive datatypes:
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 325469771203657956n;    //bigInt 


//Reference (Non primitive)
//Array, Objects, Functions

const heros = ["vivek", "rohan", "narendra"]      //  <= array

let obj = {
    name:"vivek",
    age:26,                                  //<= object
    email:"vik@gmail.com"
}

const myFunction = function(){
    console.log("hello vivek");             // <=function
}