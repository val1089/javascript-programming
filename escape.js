const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const copyToClipboard = (text) => navigator.clipboard.writeText(text);