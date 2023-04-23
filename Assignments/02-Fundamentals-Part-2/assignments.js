'use strict';
// LECTURE: Functions
// function describeCountry(country,population,capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }
// const desc1 = describeCountry('Finland',6,'Helsinki');
// const desc2 = describeCountry('Germany',83,'Berlin');
// const desc3 = describeCountry('Iran',85,'Tehran');
// console.log(desc1);
// console.log(desc2);
// console.log(desc3);

// LECTURE: Function Declarations vs. Expressions
// function percentageOfWorld1(population){
//     return population/7900 * 100;
// }
// const percentageOfWorld2 = function(population){
//     return population/7900 * 100;
// }
// const percIran1 = percentageOfWorld1(85);
// const percChina1 = percentageOfWorld1(1441);
// const percUSA1 = percentageOfWorld1(332);
// console.log(percIran1,percChina1,percUSA1);

// LECTURE: Arrow Functions
// const percentageOfWorld3 = population => population /7900 * 100;
// const percIran3 = percentageOfWorld3(85);
// const percChina3 = percentageOfWorld3(1441);
// const percUSA3 = percentageOfWorld3(332);
// console.log(percIran3,percChina3,percUSA3);

// LECTURE: Functions Calling Other Functions
// function percentageOfWorld1(population){
//     return population/7900 * 100;
// }
// function describePopulation(country,population){
//     const perc = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about ${perc} of the world`;
// }
// const percIran = describePopulation("Iran",85);
// const percChina = describePopulation("China",1441);
// const percUSA = describePopulation("USA",332);
// console.log(percIran);
// console.log(percChina);
// console.log(percUSA);

// LECTURE: Introduction to Arrays
// const populations = [10,1441,85,332]
// console.log(populations.length === 4);
// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];
// console.log(percentages);
// LECTURE: Basic Array Operations (Methods)
// const neighbours = ["Iraq","Afghanistan","Pakistan","Sweden","Armenia","Azerbaijan","Turkey","Turkmenistan"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if(!neighbours.includes("Germany")){
//     console.log("Probably not a central European country :D");
// }
// neighbours[neighbours.indexOf('Sweden')] = "Republic of Sweden";
// console.log(neighbours);
// LECTURE: Introduction to Objects
// const myCountry = {
//     country : "Iran",
//     capital : "Tehran",
//     language : "Persian",
//     population : 85,
//     neighbours : ["Iraq","Afghanistan","Pakistan","Sweden","Armenia","Azerbaijan","Turkey","Turkmenistan"]
// };
// console.log(myCountry);
// // LECTURE: Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

// LECTURE: Object Methods
// const myCountry = {
//     country : "Iran",
//     capital : "Tehran",
//     language : "Persian",
//     population : 85,
//     neighbours : ["Iraq","Afghanistan","Pakistan","Sweden","Armenia","Azerbaijan","Turkey","Turkmenistan"],
//     describe : function(){
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
//     },
//     checkIsland : function(){
//         this.isIsland = this.neighbours.length > 0 ? false : true;
//     }
// };
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// LECTURE: Iteration: The for Loop
// for(let i = 1;i <= 50; i++){
//     console.log(`voter number ${i} is currently voting`);
// }
// LECTURE: Looping Arrays, Breaking and Continuing
// const populations = [10,1441,85,332]
// const percentages2 = []
// for(let i = 0; i < populations.length;i++){
//     percentages2[i] = percentageOfWorld1(populations[i]);
// }
// console.log(percentages2);
// LECTURE: Looping Backwards and Loops in Loops
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// for(let i = 0;i<listOfNeighbours.length; i++){
//     for(let j = 0; j<listOfNeighbours[i].length;j++){
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }
// LECTURE: The while Loop
// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
// const perc = percentageOfWorld1(populations[i]);
// percentages3.push(perc);
// i++;
// }
// console.log(percentages3);