const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const result = await makeHttpRequest(url);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);