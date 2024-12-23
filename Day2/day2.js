"use strict";
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

// all numbers in the array need to be heading in a single direction
// platueas are not permitted

// all numbers must be with in 3 of each other

// one peak can be forgiven
// one outlier can be forgiven

export const isLinear = function (arrNum) {
  return (
    arrNum.every((curr, index) => {
      return index === 0 || curr < arrNum[index - 1];
    }) ||
    arrNum.every((curr, index) => {
      return index === 0 || curr > arrNum[index - 1];
    })
  );
};

export const isSafeRateChange = function (arrNum) {
  return arrNum.every((curr, index) => {
    return (
      index === 0 ||
      (Math.abs(curr - arrNum[index - 1]) <= 3 &&
        Math.abs(curr - arrNum[index - 1]) > 0)
    );
  });
};

export const convStrToNumArr = function (str) {
  return str.split(" ").map((val) => Number(val));
};

const countSafeReports = async function (filepath) {
  data = (await readFileAsync(filepath, "utf-8")).split("\n");
  console.log(data);
};
