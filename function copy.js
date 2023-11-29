function Display(x){
    console.log(x);
}

 Display(500);

 //Defining a function
 function sayHello(){
    console.log("Hello Programmer!")
    console.log("Hope you're doing great")
 }
 //we call the function here
 sayHello

 function print(str) {
    if (str !='') {
        return
    }
    console.log (str)
 }
 print("123")

 //function definition
 function greeting(name){
    console.log("Good morning" + name)
    console.log("Programming is fun, you know")
 }

//function definition
function doSum(x,y,z) {
    console.log("The sum is")
    console.log(x+y+z)
    console.log("The average is: ")
    console.log((x+y+z)/3)
}

//function definition
doSum(10,20,30)


var car = 'Toyota camry'
function myFunction() {
    var car = 'Bugat';
    console.log(car); // car is function scope
}
myFunction();

console.log(car); // car outside the function scope

function multply(num1,num2) {
    return num1 +num2;
}
let x =2 ;
let y =3 ;
console.log("Multiplication of", x,
    "and",x,"is",Multply(x,y));
    