// loops
// for loop
for(let i=0;i<10;i++)
console.log(i)

for(let i=5;i>=0;i--)
console.log(i)

// 
for(let i=0;i<10;i++){
    console.log(`${i} * ${i} = ${i * i}`);
}

// adding element to array using for loop
const countries = ["finland","sweden","russia","denmark","norway"]
console.log(countries);
let country = []
for(let i=0;i<countries.length;i++){
    country.push(countries[i].toUpperCase())
}
console.log(country);

// sum of numbers
let number = [1,2,3,4,5]
let sum = 0
for(let i=0;i<number.length;i++){
    sum = sum + number[i]
}
console.log("the sum of nubmers is: ",sum);

// new array based on existing array
let num1 = [1,2,3,4,5]
let newNum = [] 
for(let i=0;i<num1.length;i++){
    newNum.push(num1[i] ** 2)
}
console.log(newNum);

//while loop
let i = 0
while(i < 5){
    console.log(i);
    i++
}

// do while
let x = 0
do{
    console.log(x);
    x++
} while(x<=5)


// for of loop

for(const num of number){
    console.log(num);
}

for(const num of number){
    console.log(num ** num);
}

const webTechs = ["html","css","javascript","react","redux","node js"]
for(const tech of webTechs){
    console.log(tech.toUpperCase());
}
for(const tech of webTechs){
    console.log(tech[0]);
}

let newArrr = []
for(const country of countries){
    newArrr.push(country.toUpperCase())
}

console.log(newArrr);


// break
let num2 = [1,2,3,4,5,6,7,8,9]
for(let i=0;i<num2.length;i++){
    if(i==4){
        break;
    }
    console.log(i);
}

// continue
let num3 = [1,2,3,4,5,6,7,8,9]
for(let i=0;i<=num3.length;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}