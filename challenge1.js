const { count } = require("console");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

const splitLeftRighData = function (data, leftOrRight) {
  const leftList = [];
  const rightList = [];

  for (let i of data) {
    let [left, right] = i.split("   ");
    leftList.push(Number(left));
    rightList.push(Number(right));
  }

  if (leftOrRight === "left") {
    return leftList;
  } else {
    return rightList;
  }
};

const diffBetweenLists = async function (fileName) {
  // import the data from the file
  const data = (await readFileAsync(fileName, "utf-8")).split("\n");
  const leftList = splitLeftRighData(data, "left");
  const rightList = splitLeftRighData(data, "right");
  const diff = [];

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  for (let i = 0; i < leftList.length; i++) {
    diff.push(Math.abs(leftList[i] - rightList[i]));
  }

  return diff.reduce((acc, curr) => {
    return acc + curr;
  });
};

const similarityScore = async function (fileName) {
  // import the data
  const data = (await readFileAsync(fileName, "utf-8")).split("\n");
  const leftList = splitLeftRighData(data, "left");
  const rightList = splitLeftRighData(data, "right");
  // sum the occurances on the left
  const sumLikeValues = {};
  for (let i of leftList) {
    if (sumLikeValues[i]) {
      sumLikeValues[i] += i;
    } else {
      sumLikeValues[i] = i;
    }
  }
  // count the occurances on the right
  const countOccurances = {};
  for (let i of rightList) {
    if (countOccurances[i]) {
      countOccurances[i] += 1;
    } else {
      countOccurances[i] = 1;
    }
  }
  // multiply the sum by the occuances and sum
  let score = 0;
  for (i of Object.keys(sumLikeValues)) {
    if (countOccurances[i]) {
      score += sumLikeValues[i] * countOccurances[i];
    }
  }
  return score;
};

diffBetweenLists("Day1\\challengeOneCodes.txt").then((data) =>
  console.log(data)
);

similarityScore("Day1//challengeOneCodes.txt").then((value) =>
  console.log(value)
);
