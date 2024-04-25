const results = await Promise.all(resultingPromises);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const merge = [...new Set(a.concat(b))];
console.log(1 +  "2" + "2");