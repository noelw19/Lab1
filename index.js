/*var numOne = 500;
var numTwo = 600;
var numThree = 700;
var numFour = 800;
var sum;

sum = (numOne + (numFour - numThree));

console.log("sum = " + sum);*/

//scope and nested functions example 1:
//accessing local variable in outer function from inner function
//outer function
function myFunc() {
    //local variable
    var myLocalVariable = "I am local"
    let myLocalLetVariable = "I am also local"
    // inner function
    
    function myInnerFunction() {
    //try to access the value of myLocalVariable
    //from function inside myFunc function
    console.log(myLocalVariable)
    
    }
return myInnerFunction()
}
myFunc()