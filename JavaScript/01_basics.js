/* NOTES

const, let, var

# Documnetation of JS -> tc39.es (ECMA) or MDN
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

#

















*/

let score = "33"
console.log(typeof(score));

let name = Number(score)
console.log(name);

console.log(typeof(name))



