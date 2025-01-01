//singleton or with the help of constructor

const tinderUser = new Object()
                                         //both objects (tinderUser) (tinderUser2) create same instance in memory
//const tinderUser2 = {}
//console.log(tinderUser);
//console.log(tinderUser2);

 tinderUser.id  = "123abc"
 tinderUser.name = "Vivek"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     emai: "vik@gmail.com",
//     userfullName: {
//          firstName: "Vivek",
//          lastName: "Rajbhar"
//     }
// }
// console.log(regularUser.userfullName);

  const obj1 = {1: "a", 2: "b"}
  const obj2 = {3: "a", 4: "b"}

//console.log(obj1 , obj2);

// const obj3 = Object.assign(obj1, obj2)    //assiging two objects to a single object 
// const obj4 = Object.assign({},obj1, obj2)     
// console.log(obj3);
// console.log(obj4);

// const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users =[
  {
      id:1,
      email: "v@gmail.com"
  },
  {

  },
  {
      id:2,
      email: "v@gmail.com"
  },
  {
      id:3,
      email: "v@gmail.com"
  },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //it will convert every key value pair into array.



