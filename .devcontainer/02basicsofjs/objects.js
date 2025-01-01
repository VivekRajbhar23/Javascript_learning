//object literals

//Symbol <- datatype

const mySym = Symbol("key1");

const jsUser = {
    name: "Vivek",
    "fullname": "Vivek Rajbhar",    //<- this value only access by [] brackets & not by (.) operator
    [mySym]: "myKey",
    age: 2,
    location: "Indore",
    email: "vivek@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullname"]);
console.log(jsUser[mySym]);

//how to change value of objects

jsUser.email = "vivek@google.com"

console.log(jsUser);

//Object.freeze(jsUser)  //with the help of freeze() method no one can change the value of object.

jsUser.age = 5
//console.log(jsUser);

// treating funciton as a variable in object

jsUser.greetings = function()
{
    console.log("Hello everyone");
}
jsUser.greetingsTwo = function()
{
    console.log(`Hello everyone , ${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());



