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