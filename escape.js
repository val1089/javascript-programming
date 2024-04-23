console.log(+"1" +  "1" + "2");
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;