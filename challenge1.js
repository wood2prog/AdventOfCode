const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

const diffBetweenLists = async function (fileName) {
  // import the data from the file
  const data = (await readFileAsync(fileName, "utf-8")).split("\n");
  const leftList = [];
  const rightList = [];
  const diff = [];

  for (let i of data) {
    let [left, right] = i.split("   ");
    leftList.push(Number(left));
    rightList.push(Number(right));
  }

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  for (let i = 0; i < leftList.length; i++) {
    diff.push(Math.abs(leftList[i] - rightList[i]));
  }

  return diff.reduce((acc, curr) => {
    return acc + curr;
  });
};

diffBetweenLists("Day1\\challengeOneCodes.txt").then((data) =>
  console.log(data)
);
