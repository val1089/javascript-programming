const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
var pattern = {};