//Arrays

const myArr = [0,1,2,3,4,5];
//console.log(myArr[2]);


const arr = new Array(10,20,30,40,50);
//console.log(arr[1]);

//  Arrays methods

//we can add more elements in arrays 
//arr.push(60);

// pop() won't take any arguments it will just remove the last element of array
//arr.pop();

//unshift(11) will add an element in the starting of the array.
//arr.unshift(11);

//shift() will remove an element from the starting of array.
//arr.shift();


//console.log(arr.includes());  //it will return boolean value

//console.log(arr.indexOf(30));

// const newArr = arr.join();   //join() will bind the array and also it will convert the array into string

// console.log(arr);

// console.log(typeof newArr);

//SCLIE AND SPLICE

// The difference between slice and splice 
//slice will give you all the elements which comes in the range that you have passed in parameter.
//splice will also give you all the elements which comes in the range that you have passed in parameter but
// it will manipulate the whole array it will take out the array elements.

console.log("A ",arr);

const myn1 = arr.slice(1, 3);

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3);
console.log("C ",arr);
console.log(myn2);



