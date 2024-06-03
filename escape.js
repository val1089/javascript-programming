const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const scriptRootPath = path.join(repositoryRootPath, 'script');