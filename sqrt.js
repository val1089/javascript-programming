const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;