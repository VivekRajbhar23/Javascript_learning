// const a=12345
// let b="vivek"
// var c="vik@gmail.com"

// console.table([a,b,c])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
//---------------------------------------------------

// let score = "Vivek"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)

//console.log(typeof valueInNumber)
//console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = "Vivek"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//1 => true; 0 => false

//"" => false

//"vivek" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)