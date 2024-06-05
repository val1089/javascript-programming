const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
var c = new Counter(); c.add(); c.add(); c.add();
console.log(1 +  -"1" + "2");