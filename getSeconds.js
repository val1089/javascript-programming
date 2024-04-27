const uniqueArr = (arr) => [...new Set(arr)];
const buildOutputPath = path.join(repositoryRootPath, 'out');
const appName = getAppName(channel);