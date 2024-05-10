const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const uniqueArr = (arr) => [...new Set(arr)];
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;