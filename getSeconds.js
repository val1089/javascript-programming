const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const repositoryRootPath = path.resolve(__dirname, '..');
const electronDownloadPath = path.join(repositoryRootPath, 'electron');