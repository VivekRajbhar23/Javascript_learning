//+++++++++++++++++Number+++++++++++++++++++

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length());
console.log(balance.toFixed(1));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++Maths++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));   //it will change negetive value into positive 
                             //but positive value will remain positive
console.log(Math.round(4.6)); //it will give the round of value
console.log(Math.ceil(4.2));  //it will also give the round of value 5
console.log(Math.floor(4.9));  //it will also give the round of value 4

 console.log(Math.random());
 console.log((Math.random()*10)+1);
 console.log(Math.floor(Math.random()*10)+ 1);

 const min = 10;
 const max = 20;

 console.log(Math.floor(Math.random() * (max - min+1))+min);
 
 
 
 




