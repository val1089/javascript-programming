const fullName = name || 'buddy';
var c = new Counter(); c.add(); c.add(); c.add();
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;