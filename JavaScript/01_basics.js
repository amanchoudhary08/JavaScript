/* NOTES

const, let, var

# Documnetation of JS -> tc39.es (ECMA) or MDN
https://developer.mozilla.org/en-US/docs/Glossary/ECMA
https://262.ecma-international.org/5.1/#sec-11.4.3


# Don't use var beacuse of issue in block scope and fucntional scope
# "use strict" -> treat all JS code as newer version of JavaScript, but as of now, it's by default Strict

# Types of DataTypes in JS
# number, bigint, string, boolean, null(standalone value), undefined, symbol-> for unique symnbols, object
# Null ka type object hota h.

# let score = "33"
console.log(typeof(score));

let name = Number(score)
console.log(name);

# 123a ko Number() main paas krke jab iski value check krenge to NaN, and it's type is number 
Undefined ko Number() main paas krke jab iski value check krenge to NaN, and it's type is number
null ko Number() main paas krke jab iski value check krenge to 0, and it's type is number

# "33" -> 33
  "33a" -> NaN
   true -> 1
   Undefined -> NaN
   null -> NaN

# console.log(2**2) means 2 ki power 2

# cl("1" + 2) -> 12
cl(1f +" 2") -> 12
cl("1" + 2 + 2) -> 122
cl(1+ 2 + "2") -> 32

string first main h to, sbko string treat kiya jaaega, aur agar string last main h to, pehle wale coperations ho jaaenge, and then string operation.

# cl(null > 0) -> false
cl(null == 0) -> false
cl(null >= 0) -> true 

reason is that, equality check (==) and comparison operators (>, <, >=, <=) work differently, 
Comparison convert NULL to a number, converting it to a 0.

#strict check (===)
cl("2" == 2) -> true
cl("2" === 2) -> false (strict check, also check the data type of the number) 

# Types of Data Types
1. Primitive: 
            7 Types-> String, Number, Boolean, null, undefined, symbol,  BigInt

2. Non-Primitive: 
                Array, Objectsn Functions

#











*/

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

const heroes = ["A", "B", "C"];
let myObj = {
    name: "Aman",
    age: 22,
}

const myFun = function(){
    console.log("hello world");
    
}

console.log(typeof(id));
