// declaring an empty array
const arr = Array()
let array = new Array()
const arrr = []

console.log(arr,array,arrr);

//array with values
let number = ["1","9.8","10","98.6","100"]
console.log(number);
let fruits = ["Apple","Orange","Pineapple","Grapes","Mango","Blueberries"]
console.log(fruits);
let companies = ["Google","Microsoft","Apple","Tesla","Tata"]
console.log(companies);

//length of array
console.log("Total number of element in number array: ",number.length)
console.log("Total fruits: ",fruits.length);

//
let ar = ['John', 21, true, {country: "India", city: "Bangalore"}, {skills: ["html","css","js"]}]
console.log(ar)

//creating array using split

let js = "JavaScript"
console.log(js.split(""));

let country = "India, Japan, South Korea, Russia, UAE"
console.log(country.split(','));

// accessing array element
console.log(fruits[1]);//second 
console.log(fruits[0]);//first
console.log(fruits[2]);//third
console.log(fruits.length-1);//last index

// modifing an array
companies[1] = "Nike"
console.log(companies);
companies[3] = "Puma"
console.log(companies);
let lastIndex = companies.length-1
companies[lastIndex] = "Mahindra"
console.log(companies)

// methods to manipulate and array

// array constructor ,create an array
const arrrr = Array()
console.log(arrrr);

const eightEmptyArray = Array(8)
console.log(eightEmptyArray);

// static value with fill an array

const fillEightValue = Array(8).fill("X")
console.log(fillEightValue);

// concat an array, join two array
let one = ["bannana","orange","pineapple","apple","grapes"]
let two = ["Tomato","potato","cabbage","onion","beetroot"]
let three = one.concat(two)
console.log(three);

// length of an array,find length of array
console.log("The length of upper array ",three.length);

// indexof an array, check index value
console.log(one.indexOf("pineapple"));

let index = one.indexOf("orange")

if (index === 1){
    console.log("The fruit is present in array");
} else{
    console.log("The fruit is not in array");
}

// last index of an array, return index value of element
let lastindex = [1,2,3,4,5,6,7,8,9,0]
console.log(lastindex.lastIndexOf(8));

// includes , check if array includes element or not ,return index value
console.log(lastindex.includes(6));

// checking an array ,is it array of only number , return true or false
console.log(Array.isArray(lastindex));

// converting array to string, convert array to string

console.log(lastindex.toString());

// join , convert array to string with special character in between
console.log(lastindex.join('*'));
console.log(lastindex.join("/"));
console.log(lastindex.join("$"));
console.log(three.join("#"));

// slice an array , remove element from array take starting index value and end index value doesnot includes last index element
console.log(lastindex.slice(2,6));

// splice , remove element of array, starting from number of index, how much element to remove , how much element to add
console.log(one.splice(1,3,"apple","strawberry","pineapple"));

// push , add element to array at last
one.push("strawberry")
console.log("push ",one);

// pop , remove last element of array
one.pop()
console.log("pop " ,one);

// shift , remove first element of array
console.log(two);
two.shift()
console.log("shift ",two);

// unshift  add element to first of array
console.log("without unshift",two);
two.unshift("ladyfinger")
console.log("unshift ",two);

// reversing an array , reverse in order
let num = [1,2,3,4,5]
console.log(num);
num.reverse()
console.log(num);

// sorting an array

let sortingArray = ["Facebook","Apple","Microsoft","IBM","Softbank"]
console.log("unsorted ",sortingArray);
console.log("sorted array ",sortingArray.sort());

// arrays of array

let frontend = ["HTML","CSS","javaScript","React"]
let backend = ["Express","MongoDB","Node"]
let fullstack = [frontend, backend]
console.log(fullstack)
console.log(fullstack[0]);
console.log(fullstack[1]);