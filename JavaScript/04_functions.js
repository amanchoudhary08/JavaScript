/*
    # DIFFERENCE BETWEEN PARAMETER AND ARGUMENTS;
    # function fn(int a, int b){          --->> a, b are PARAMETERS
    #    console.log(a+b);
    # }
    #
    # fn(3,4);                            --->> here 3,4 are ARGUMENTS

    ## FUNCTIONS AND PARAMETERS IN JS
            
        function sayName(){
            console.log("Aman");
        }
        sayName();

        sayName --> function reference
        sayName() --> function execution
        

        let A = "Aman";
        for(let i of A){
            console.log(i);    
        }

    ## SCOPES IN JS

    let a = 100;

    if(true){
        let a = 1;
        const b= 2;
        var c = 3;

        console.log(a);            -->> 1 
    }
        console.log(a);         -->> 100
        console.log(b);
        console.log(c);

        a and b give error but c will print, so VAR is not good.





*/

// function sayName(){
//     console.log("Aman");
// }

// sayName();

// "33" -> 33
//   "33a" -> NaN
//    true -> 1
//    Undefined -> NaN
//    null -> NaN

// let s = null;
// console.log(s);


// let name = Number(s)
// console.log(typeof name);

// console.log(name);


