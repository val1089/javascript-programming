const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const merge = (a, b) => [...a, ...b];