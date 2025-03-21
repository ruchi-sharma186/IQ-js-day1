console.log("hello ruchi")
//Difference between “ == “ and “ === “ operators.
//== (Loose Equality / Abstract Equality):
let num1 ="20";
 let num2 = 20;
 console.log(num1 == num2);  

 //=== (Strict Equality):
 console.log(num1 === num2);

 //var
 var x = 10;
if (true) {
    var x = 20; // This redeclares and reassigns x globally
}
console.log(x); // 20
  
//let 

let y = 10;
if (true) {
    let y = 20; // This is a different variable, scoped inside the block
    console.log(y); // 20
}
console.log(y); // 10 (original y remains unaffected)


//const

const z = 10;
console.log(z)

//execution context

let a = 10;  // Global Execution Context

    let message = "Hello, World!";
    console.log(message);


    //creation phase and execution phase

        console.log(n);  // undefined
        var n = 5;

//hoisting
        console.log(a); // undefined (variable declaration is hoisted)
        var c = 5;
        
        console.log(d); // ReferenceError: b is not defined
        let d = 10;
        

      


