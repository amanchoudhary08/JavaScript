/*
##############################################          SYMBOL IN OBJECTS           #########################################

    #   SINGLETON OBJECT
            const user = new Object();
    
    #   Non-Singleton Object
            const user = {};
            
    



    const user = {
        name: "aman",
        email: "aman@google.com",
        "full name": "Aman Choudhary"
    }

    // ways to access the user elements
    // 1. user.name
    // 2. user["name"]          --->> good way

    console.log(user["name"]);
    console.log(user["full name"]);
    
    ##  Object.freeze(user);        -->> After this, the value of user Element will not change
        user.name = "Anuj";
        console.log(user.name);

    ## Copying the objects elements to a object

    let obj1 = {1:"a", 2: "b"}
    let obj2 = {4:"a", 5: "b"}

    // # Syntax for adding the elements of obj1, obj2

    // let obj = Object.assign(target, source);        -->> target means values go to target from the source objects
    let obj = Object.assign({}, obj1, obj2);
    // let obj3 = {...obj1,...obj2}                     -->> SPREAD OPERATOR

    // console.log(obj1);
    // console.log(obj2);
    console.log(obj);


    
    ## To get keys and values of the Objects
    console.log(Object.keys(obj1));
    console.log(Object.values(o

    


*/

//creating a Object

//const user = {
//     name: "aman",
//     email: "aman@google.com",
//     "full name": "Aman Choudhary"
// }

// ways to access the user elements
// 1. user.name
// 2. user["name"]          --->> good way

// console.log(u  user["full name"]);

// Object.freeze(user);        -->> After this, the value of user Element will not change
// user.name = "Anuj";
// console.log(user.name);


// user.greeting = function(){
//     console.log("Hello user ");
// }

// user.greetingTwo = function(){
//     console.log(`Hello 2nd User ${this["full name"]}`);
    
// }

// console.log(user.greeting());
// console.log(user.greetingTwo());

// const user = {
//     email: "aman@gmail.com",
//     username:{
//         fullName: {
//             firstName: "Aman",
//             lastName: "Choudhary"
//         }
//     }
// }

// console.log(user.email);
// console.log(user.username);

// console.log(user.username.fullName.firstName);

let obj1 = {1:"a", 2: "b"}
let obj2 = {4:"a", 5: "b"}

// # Syntax for adding the elements of obj1, obj2

// let obj = Object.assign(target, source);        -->> target means values go to target from the source objects
// let obj = Object.assign({}, obj1, obj2);
// let obj3 = {...obj1,...obj2}

// console.log(obj1);
// console.log(obj2);
// console.log(obj);


// To get keys and values of the Objects
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));


//# Object de-structure

const course = {
    name : "JS",
    price: "999",
    courseInstructor: "Aman"
}

const {courseInstructor: teacher} = course;

console.log(teacher);
