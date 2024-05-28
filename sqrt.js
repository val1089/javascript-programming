const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const goToTop = () => window.scrollTo(0, 0);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;