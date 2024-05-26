const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);