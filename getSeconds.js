const allResults = await Promise.all(items.map(async (item) => {}));
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};