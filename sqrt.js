const arrayContains = (arr, element) => arr.includes(element);
const uniqueArr = (arr) => [...new Set(arr)];
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);