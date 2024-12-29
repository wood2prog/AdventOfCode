import { positionToOffset } from "@vitest/utils";
import { read } from "fs";
import { readFile } from "fs/promises";
import { list } from "postcss";
import { serialize } from "v8";

export const parseData = function (data) {
  const expression = /mul\(\d+,\d+\)/g;
  const matches = data.match(expression);
  const results = [];
  for (let i of matches) {
    results.push(
      i
        .slice(4, i.length - 1)
        .split(",")
        .map((value) => Number(value))
    );
  }
  return results;
};

export const addResults = function (numArr) {
  let sum = 0;
  for (let i of numArr) {
    sum += i[0] * i[1];
  }
  return sum;
};

export const listIndexes = function (str, searchStr) {
  const locations = [];

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(searchStr, i) >= 0) {
      locations.push(str.indexOf(searchStr, i));
      i = locations[locations.length - 1];
    } else {
      break;
    }
  }
  return locations;
};

export const extractNumber = function (str) {
  let numberResult = "";
  for (let i of str) {
    if (Number(i)) {
      numberResult += i;
    } else {
      break;
    }
  }
  if (numberResult) {
    return Number(numberResult);
  } else {
    return NaN;
  }
};

export const textTween = function (str, start, end) {
  const startIndex = str.indexOf(start);
  const endIndex = str.indexOf(end);

  if (endIndex >= 0 && startIndex >= 0) {
    return str.slice(startIndex + 1, endIndex);
  }
  return undefined;
};

export const validateNumberPair = function (str) {
  let numberPair = "";

  if (!str) return undefined;

  if (str.includes(",")) {
    numberPair = str.split(",").map((value) => Number(value));
    if (numberPair.every((value) => !isNaN(value))) {
      return numberPair;
    }
  }

  return undefined;
};

export const listNumberPairs = function (str) {
  const numberPairs = [];
  let possiblePair = "";
  const numberLocations = listIndexes(str, "mul(");

  for (let i of numberLocations) {
    possiblePair = validateNumberPair(textTween(str.slice(i), "(", ")"));
    if (possiblePair) {
      numberPairs.push(possiblePair);
    }
  }

  return numberPairs;
};

// // export const openFile = async function (filePath) {
// //   const data = await readFile(filePath, "utf-8");
// //   const results = addResults(parseData(data));
// //   return results;
// };

export const openFile = async function (filePath) {
  const data = await readFile(filePath, "utf-8");
  const results = listNumberPairs(data);
  return results
    .map((value) => value[0] * value[1])
    .reduce((access, curr) => {
      return (access += curr);
    });
};

openFile("src\\Day3\\memorydump.txt").then((value) =>
  console.log("The answer is", value)
);
