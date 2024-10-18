/*

#Learn about SHALLOW AND DEEP COPY

    let arr1 = new Array(1,2,3,4);
    console.log(arr1 + "\n");

    arr1.unshift(10);       -> added 10 at 0th Index
    arr1.shift();           -> remove the 0th element from the array
    console.log(arr1);


    const newArr = arr1.join();        -> newArr IS CONVERTED TO STRING BY THIS
    console.log(newArr);     

#SLICE AND SPLICE
    
    Important: Slice does not change the original array, but splice does, splice(1,3) -> removes the elements from index 1 to 3 return these elements.
    let arr1 = [0,1,2,3,4,5];
    console.log("arr1 -> " + arr1);
    console.log("\n");


    let a1 = arr1.slice(1,3);
    console.log("arr1 " + arr1);
    console.log("slice : a1 -> " + a1);
    console.log("\n");


    let a2 = arr1.splice(1,3);
    console.log("arr1 " + arr1);
    console.log("splice : a2 -> " + a2);

    OUTPUT: 
    arr1 -> 0,1,2,3,4,5

    arr1 0,1,2,3,4,5
    slice : a1 -> 1,2

    arr1 0,4,5
    splice : a2 -> 1,2,3


# ADDING TWO ARRAYS

    const arr1 = [1,2,3];
    const arr2 = [7,8,9];

    // arr1.push(arr2);
    // console.log(arr1);

    1. Using Concat Operator
    let newArr = arr1.concat(arr2);
    console.log(newArr);

    2. Using SPREAD operator
    let arr3 = [...arr1, ...arr2];
    console.log(arr3);

    3. If there are array in array, we can flat that using .flat()

    let arr1 = [1,2,3,[2,3,4,[2,3,[1]]]]
    console.log(arr1);

    let arr2 = arr1.flat(Infinity);
    arr2.sort();
    console.log(arr2)

    4. Making a Array
        let score1 = 100;
        let score2 = 200;
        let score3 = 300;
        
        console.log(Array.of(score1, score2, score3));

    5.
        console.log(Array.isArray("aman"));      -> checks whether is it array
        console.log(Array.from("aman"));        -> converts it to array


*/




// let arr = [1,2,3,4,5,true];
// console.log(arr[1]);


// let arr1 = new Array(1,2,3,4);
// console.log(arr1 + "\n");

// arr1.unshift(10);
// arr1.shift();
// console.log(arr1);


// let arr1 = [0,1,2,3,4,5];
// console.log("arr1 -> " + arr1);
// console.log("\n");


// let a1 = arr1.slice(1,3);
// console.log("arr1 " + arr1);
// console.log("slice : a1 -> " + a1);
// console.log("\n");


// let a2 = arr1.splice(1,3);
// console.log("arr1 " + arr1);
// console.log("splice : a2 -> " + a2);

// OUTPUT: 
// arr1 -> 0,1,2,3,4,5


// arr1 0,1,2,3,4,5
// slice : a1 -> 1,2


// arr1 0,4,5

// const arr1 = [1,2,3];
// const arr2 = [7,8,9];

// // arr1.push(arr2);
// // console.log(arr1);

// let newArr = arr1.concat(arr2);
// console.log(newArr);

// //Using SPREAD operator
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// let arr1 = [1,2,3,[2,3,4,[2,3,[1]]]]
// console.log(arr1);

// let arr2 = arr1.flat(Infinity);
// arr2.sort();
// console.log(arr2);
 
// console.log(Array.isArray("aman"));      -> checks whether is it array
// console.log(Array.from("aman"));        -> converts it to array