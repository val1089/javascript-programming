const stringReverse = str => str.split("").reverse().join("");
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const channelName = getChannelName(channel);