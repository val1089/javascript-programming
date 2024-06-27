const currentDate = () => new Date().toLocaleDateString('en-US');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();