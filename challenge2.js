"use strict";
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

const linearChange = function (numArray) {
  for (let i = 0; i < numArray.length - 1; i++) {
    if (
      (numArray[i] < numArray[i - 1] && numArray[i] < numArray[i + 1]) ||
      (numArray[i] > numArray[i - 1] && numArray[i] > numArray[i + 1])
    ) {
      return false;
    }
  }
  return true;
};

const safeRateOfChange = function (numArray) {
  for (let i = 1; i < numArray.length; i++) {
    const rateOfChange = Math.abs(numArray[i] - numArray[i - 1]);
    if (rateOfChange > 3 || rateOfChange < 1) {
      return false;
    }
  }
  return true;
};

const countSafeReports = async function (filename) {
  const data = (await readFileAsync(filename, "utf-8")).split("\n");
  const result = data.map((reports) => {
    return linearChange(reports.split(" ").map((val) => Number(val))) &&
      safeRateOfChange(reports.split(" ").map((val) => Number(val)))
      ? true
      : false;

    // return the count quantity of safe reports
  });
  return result.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
};

countSafeReports("Day1\\reports.txt").then((value) => console.log(value));
