const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;
const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;

const yearsAlive = 39;
const secondsAlive = yearsAlive * weeksPerYear * daysPerWeek * secondsPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);
console.log(`I've been alive for more than ${secondsAlive} seconds!`);
