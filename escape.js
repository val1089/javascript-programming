const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log("1 || 2 = "+(1 || 2));
const added = [0, 1, 2, 3, 4].map((item) => item + 1);