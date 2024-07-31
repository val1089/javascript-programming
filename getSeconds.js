const maxNumber = arr => Math.max(...arr);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");