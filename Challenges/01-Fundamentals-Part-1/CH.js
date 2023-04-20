/* 
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).


Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

let markWeight;
let johnWeight;
let markHeight;
let johnHeight;
let markHigherBMI;
let johnBMI;
let markBMI;

// Data 1
console.log("Data 1");
markWeight = 78;
markHeight = 1.69;
markBMI = markWeight / markHeight ** 2;
console.log("Mark BMI: " + markBMI);
johnWeight = 92;
johnHeight = 1.95;
johnBMI = johnWeight / johnHeight ** 2;
console.log("John BMI: " + johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log("Mark has heigher BMI than John: " + markHigherBMI);

// Data 2
// console.log("Data 2");
// markWeight = 95;
// markHeight = 1.88;
// markBMI = markWeight / markHeight ** 2;
// console.log("Mark BMI: " + markBMI);
// johnWeight = 85;
// johnHeight = 1.76;
// johnBMI = johnWeight / johnHeight ** 2;
// console.log("John BMI: " + johnBMI);
// markHigherBMI = markBMI > johnBMI;
// console.log("Mark has heigher BMI than John: " + markHigherBMI);

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
// 1.
if(markBMI > johnBMI){
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}
//2.
if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}