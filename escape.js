const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const intermediateAppPath = path.join(buildOutputPath, 'app');