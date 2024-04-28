const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
console.log(1 +  "2" + "2");
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
var arr3 = "jones".split('');
const isArray = (arr) => Array.isArray(arr);