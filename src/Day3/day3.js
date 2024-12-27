import { read } from "fs";
import { readFile } from "fs/promises";

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

export const openFile = async function (filePath) {
  const data = await readFile(filePath, "utf-8");
  const results = addResults(parseData(data));
  return results;
};

openFile("src\\Day3\\memorydump.txt").then((value) =>
  console.log("The answer is", value)
);
