// LECTURE: Values and Variables
const country = "Iran";
const continent = "Asia";
let population = 85             // population in millions
// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: Data Types
const isIsland = false;
const language = "persian";
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// LECTURE: let, const and var
// has done in previous sections

// LECTURE: Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
let description = country + 
                " is in " + 
                continent + 
                ", and its " + 
                population + 
                " million people speak " + 
                language;
// console.log(description);

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// LECTURE: Taking Decisions: if / else Statements
// population = 13
// if(population > 33){
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33 - population} million below average`);    
// }

// LECTURE: Type Conversion and Coercion
// console.log('9' - '5');                 // '4'
// console.log('19' - '13' + '17');        // '617'
// console.log('19' - '13' + 17);          // '23'
// console.log('123' < 57);                // false
// console.log(5 + 6 + '4' + 9 - 4 - 2);   // '1143'

// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if(numNeighbours === 1){
//     console.log('Only 1 border!');
// } else if(numNeighbours > 1){
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// LECTURE: Logical Operators
// if(language==="English" && population < 50 && !isIsland){
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// LECTURE: The switch Statement
// switch(language){
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// LECTURE: The Conditional (Ternary) Operator
// const str = population > 33 ? 'above' : 'below';
// console.log(`${country}'s population is ${str} average`);