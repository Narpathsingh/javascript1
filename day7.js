// function
// declaration function
// expression function
// anonymous function
// arrow function

// declare a function
function firstFunction(){

}
firstFunction()

// function withour parameters
function addNumbers(){
    let one = 21;
    let two = 10;
    console.log("The value of one and two: ",one+two);
}

addNumbers()

function square(){
    let sum = 2
    console.log("The sum of number is: ",sum * sum);
}

square()

// print name
function printFullName(){
    let firstName = "John"
    let secondName = "Doe"
    let fullName = firstName +  " " + secondName
    console.log(fullName);
}

printFullName()


// Function with return value
function printFullNAme(){
    let Firstname = 'John'
    let Secondname = 'Doe'
    let FullName = Firstname + ' ' + Secondname
    return FullName
}

console.log(printFullNAme());

// function with parameter
function circleArea(r){
    let area = Math.PI * r * r
    return area
}

console.log(circleArea(2));

function squareofNumber(square){
    return square * square
}

console.log(squareofNumber(3));

// function with two parameters
function additionOfNumbers(num1,num2){
    let value = num1 + num2
    console.log(value);
}

additionOfNumbers(2,4)

// with return
function additionOfNumbers(num1,num2){
    let value = num1 + num2
    return value
}

console.log(additionOfNumbers(5,5));

function printFullName(firstName,secondName){
   return `${firstName + " " + secondName}`
}

console.log(printFullName("John","Doe"));

// function with many parameters
function sumOfArray(arr){
    let sum1 = 0;
    for(let i=0;i<arr.length;i++){
        sum1 = sum1 + arr[i]
    }
    return sum1
}

let num3 = [1,2,3,4,5]

console.log(sumOfArray(num3));

// 
function sumOfAll(){
    console.log(arguments);
}
sumOfAll(1,2,3,4,5,6)

function sumOfNums(){
    let sum = 0
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumOfNums(1,2,3,4,5,6,7,8));
console.log(sumOfNums(4,189,48,5,34,861,8));

// arrow function
function sumOfAllNum(...args) {
    console.log(args);
}
sumOfAllNum(1,2,3,4,5,6)

// anonymous function
const anonymousFun = function() {
    console.log(
    "I am a anonymous function and my value stored in anonymousfun"
    )
}
console.log(anonymousFun);

// expression function
const square1 = function(n){
    return n * n
}
console.log(square1(5));

// self invoking function
(function(n){
    console.log(n * n);
})(10)

// arrow function
const square2 = n =>{
    return n * n
}
console.log(square2(5));

const changeToUpperCase = arr =>{
    const arrr = []
    for(const element of arr){
        arrr.push(element.toUpperCase())
    }
    return arrr
}
let fruits = ['apple','pineapple','mango','orange','strawberry']
console.log(changeToUpperCase(fruits));

const printFulllNAME = (firstName, lastName) =>{
    return `${firstName + lastName}`
}

console.log(printFulllNAME("John","Doe"));

// function with default parameter
function greet(name = "Mike"){
    let message = `How are you ${name}`
    return message
}

console.log(greet());
console.log(greet("JOY"));

// 
function generatefullName(firstName = "JOHN", lastName = "DOE"){
    let space = " "
    let fullNAME = firstName + space + lastName
    return fullNAME
}

console.log(generatefullName("Mike","Tyson"));

//  massof body
function weightOfBody(mass,gravity = 9.81){
    let weight = mass * gravity + " Newton" 
    return weight
}

console.log("Weight of human body on earth:",weightOfBody(74));
console.log("Weight of human body on moon: ",weightOfBody(74,1.62));

// above function in arrow function
const greetings = (name = "peter") => {
    let messages = `How are you ${name}, hope you doing well`
    return messages
}

console.log(greetings());
console.log(greetings("Jackie"));

// 
const fullNameGenerator = (firstName = "Narpath", secondName = "Singh") => {
    let NAME = firstName + " " + secondName
    return NAME
}

console.log(fullNameGenerator());
console.log(fullNameGenerator("Jackie","Chan"));